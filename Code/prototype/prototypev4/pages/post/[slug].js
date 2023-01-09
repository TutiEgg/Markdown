import fs from 'fs';
import matter, { read } from 'gray-matter';
import md from 'markdown-it';
import * as React from "react";


// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const {readFileSync, promises: fsPromises} = require('fs');
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/[()]/);

  return arr;
}



/**
 * Foo takes any argument.
 * The return value is 'baz' in all cases.
 * @param {*} bar - Any argument
 * @param {string} [optionalArg] - An optional argument that is a string
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
 * getStaticProps
 * The return value is 'baz' in all cases.
 * @param {*} slug - Any argument
 * @param {string} [optionalArg] - An optional argument that is a string
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
  
  // Create a Dictionary-like Object out of an multidimensional List
  let data_dict = create_dict_outof_list(files_all)
  // Creates the Navigation-string for the User
  let msg = navigationJson(data_dict, "posts", "");
  // Writes/saves the Navigation-string into a txt-file
  fs.writeFile('pages/post/navigation.txt',msg,(err) => err && console.error(err));

  const fileName = fs.readFileSync(`${path}`, 'utf-8');

 // test_file('pages/post/log.txt')
 
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


/*
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

  // var navi = new Array();
  // for(var x=0; x<=length;x++){
  //   var navi_l=new Array();
  //   console.log("x",x);
  //   for (var t=0; t<_files.length; t++){
  //     const split =_files[t].split(/[/]/);
  //     const file_length = split.length; 
  //     const name= split[file_length-1];
  //     //console.log("length",file_length);
  //     //console.log(split);
  //     if(x==file_length){
  //       const folder =split[x-2];
  //       // navi_l.push({"name":name,"folder":folder});
  //       navi_l[t]=({"name":name,"folder":folder});
        
  //       // //console.log(folder);
  //       // let nav_obj={
  //       //   [folder]:[{"name":name}]
  //       // }
  //       // navi.push(nav_obj);
  //     }
  //   }
  //   console.log(navi_l);
  //   var temp = navi_l[0];
  //   console.log("Dicct", typeof temp);
    
  //   console.log("name", Object.keys(temp).find(key => temp[key] === 'name'));
  //   //console.log("Name",navi_l[0].value());
  //   console.log(navi_l.length);
  //   var result = navi.find(obj => {
  //     return obj.name
  //   })
  //   console.log(result);
  //   for (var f=0; f<navi_l.length; f++){
    //   let nav_obj={
    //     [folder]:[{"name":name}]
    //     }
    //     navi.push(nav_obj);
    // } 
//   }
// }
 
  // console.log(navi);
  // console.log(navi.length);
  // var ind = navi.index;
  // console.log("Indexfolder",navi.index);
//   fs.writeFile('pages/post/data2.json',JSON.stringify(data),(err) => err && console.error(err)); 
  // fs.writeFile('pages/post/data4.json',JSON.stringify(navi),(err) => err && console.error(err));

}
*/

function navigationJson(data, key, number){
  let msg = ""
  let counter = 1
  for (let value in data[key]) {
    let number_str = number + counter
    if (data[key][value] == null) {
      
      let value_split = value.split(".")
      msg = msg + ` (${number_str}) [navname] ${value_split[0]} [filename] ${value} \n`
      counter += 1
      
    } else {
      msg = msg + ` (${number_str}) [navname] ${value} \r\n`
      msg = msg + navigationJson(data[key], value, number + counter + ".") 
      counter += 1
    }

  }
  return msg
}

function navigationjson2(data, key, number){
  let msg = ""
  let counter = 1
  for (let value in data[key]) {
    let number_str = number + counter
    if (data[key][value] == null) {
      //console.log("Kein Object", data[key][value])
      let value_split = value.split(".")
      msg = msg + ` (${number_str}) [navname] ${value_split[0]} [filename] ${value}`
      counter += 1
      
    } else {
      //console.log("Object", data[key][value])
      msg = msg + ` (${number_str}) [navname] ${value}`
      msg = msg + navigationJson(data[key], value, number + counter + ".") 
      counter += 1
    }

  }
  return msg
}


function write_to_file(path, message) {
  var stream = fs.createWriteStream(path, {flags:'a'});
  stream.write(message)
  stream.end()
}

function write_to_file2(path, message) {
  var fs = require('fs')
  fs.appendFileSync(path, message, function (err) {
    if (err) return console.log(err);
    console.log('Appended!', message);
  });
}


function write_to_file3(path, message) {
  var fs = require('fs')
  var logger = fs.createWriteStream(path, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
  var writeLine = (line) => logger.write(`\n${line}`);
  writeLine(message);
  
}




function create_dict_outof_list(paths) {
  
  
  const dictionary = {};
  
  const process = (path, dic) => {
    if (path.length === 0)
      return;
    const key = path.shift();
    if (path.length === 0)
      return dic[key] = null;
    dic[key] ??= {};
    return process(path, dic[key]);
  };
  
  paths.forEach(path => process(path.split("/"), dictionary));
  return dictionary
}



