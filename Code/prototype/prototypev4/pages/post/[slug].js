import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as React from "react";




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
    // json2
    
    // console.log("File",file_o);

  }
  console.log(length);

  var navi = new Array();
  for(var x=0; x<=length;x++){
    var navi_l=new Array();
    console.log("x",x);
    for (var t=0; t<_files.length; t++){
      const split =_files[t].split(/[/]/);
      const file_length = split.length; 
      const name= split[file_length-1];
      //console.log("length",file_length);
      //console.log(split);
      if(x==file_length){
        const folder =split[x-2];
        // navi_l.push({"name":name,"folder":folder});
        navi_l[t]=({"name":name,"folder":folder});
        
        // //console.log(folder);
        // let nav_obj={
        //   [folder]:[{"name":name}]
        // }
        // navi.push(nav_obj);
      }
    }
    console.log(navi_l);
    var temp = navi_l[0];
    console.log("Dicct", typeof temp);
    
    console.log("name", Object.keys(temp).find(key => temp[key] === 'name'));
    //console.log("Name",navi_l[0].value());
    console.log(navi_l.length);
    var result = navi.find(obj => {
      return obj.name
    })
    console.log(result);
    for (var f=0; f<navi_l.length; f++){
    //   let nav_obj={
    //     [folder]:[{"name":name}]
    //     }
    //     navi.push(nav_obj);
    // } 
  }
}
 
  // console.log(navi);
  // console.log(navi.length);
  // var ind = navi.index;
  // console.log("Indexfolder",navi.index);
//   fs.writeFile('pages/post/data2.json',JSON.stringify(data),(err) => err && console.error(err)); 
  fs.writeFile('pages/post/data4.json',JSON.stringify(navi),(err) => err && console.error(err));

}


