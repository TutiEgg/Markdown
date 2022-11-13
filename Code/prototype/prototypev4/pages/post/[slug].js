import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as React from "react";




export async function getStaticPaths() {
  // console.log("getStaticPaths");
  const files = fs.readdirSync('posts/index');
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
  navigationJson(results);

  return results;

};
function navigationJson(_files){
  var fs = require("fs");
  var data = new Array();
  for (var i=0; i<_files.length; i++){
    const file_split = _files[i].split(/[/.]/);//ohne endung 
    const file_name= file_split[file_split.length-2];
    // const file_split = _files[i].split(/[/]/); //mit ende 
    // const file_name= file_split[file_split.length-1];
    data.push({"name":file_name,"path":_files[i]});

  }
  fs.writeFile('pages/post/data.json',JSON.stringify(data),(err) => err && console.error(err));
}

