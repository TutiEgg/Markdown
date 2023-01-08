import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as React from "react";



/**
   * Generates Static pathes
   * `/posts/1` and `/posts/2`
   *
   * @return {Object} paths - All pathes inside an Folder
*/
export async function getStaticPaths() {
  // console.log("getStaticPaths");
  var files = _getFilesListInFolderStructure("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.split(".")[0],
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
/**
 * Next.js will pre-render this page at build time using the props returned by getStaticProps
 * @param {Object} params - paths
 * @returns {Object} props - Content of the Site
 */
export async function getStaticProps({ params: { slug } }) {
  // console.log("getStaticPropss");
  const files_all = _getAllFilesFromFolder("posts");
  

  for (var x=0; x<files_all.length; x++){
    const file_split_list = files_all[x].split(/[/.]/)
    const name = file_split_list[file_split_list.length-2]

    if (name == slug){
      var path = files_all[x]
      
    }
  }
  navigationJson(files_all);
  const fileName = fs.readFileSync(`${path}`, 'utf-8');
 
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };   
}

export default function PostPage({ frontmatter, content }) {

  return (
    <div className='mx-auto'>
      <h1>{frontmatter.title}</h1><div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      
    </div>
  );
}

/**
 * Gets a List of Files with Pathes out of a Folder-Structure
 * @param {List} dir - Path to Folder
 * @returns {List} - returns a list of files (pathes)
 */
var _getAllFilesFromFolder = function(dir) {
  // console.log("getAllFiles in slug");

  var filesystem = require("fs");
  var results = [];

  filesystem.readdirSync(dir).forEach(function(file) {

      file = dir+'/'+file;
      var stat = filesystem.statSync(file);

      if (stat && stat.isDirectory()) {
          results = results.concat(_getAllFilesFromFolder(file))
      } else results.push(file);

  });
  //console.log("AllFiles",results);
  

  return results;

};


/**
 * 
 * @param {*} path 
 * @returns {List} - returns a list of files
 */
var _getFilesListInFolderStructure = function(path) {
  // console.log("getAllFiles in slug");
  var all_files_path = _getAllFilesFromFolder(path);
  var all_files_list = []
  
  for (const file of all_files_path){
    all_files_list.push(file.split('/').pop());
  }

  return all_files_list;

};

function navigationJson(_files){
  var fs = require("fs");
  var data = new Array();
  var length=0;
  for (var i=0; i<_files.length; i++){
    const file_split = _files[i].split(/[/.]/);//ohne endung 
    const file_name= file_split[file_split.length-2];
    const file_split2 = _files[i].split(/[/]/); //mit ende 
    if(file_split2.length>length){
      length= file_split2.length;
    }
    const file_name_end= file_split2[file_split2.length-1];
    let obj={
      [file_name_end]:[{"name":file_name,"path":_files[i]}]
    };
    data.push(obj);
   

  }
  


}


