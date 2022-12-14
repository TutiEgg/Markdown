/// Layout mit sidebar

import Link from 'next/link';
import * as fs from 'fs';
import React from 'react';
import {useEffect} from "react";
import * as ReactDOM from 'react-dom';


//TODO Styling überarbeiten
export default function Layout({ children }) {  
  
  useEffect(() => {
    
    var file_structure = require('../pages/post/navi.json');
    // var file_names = require('../pages/post/data2.json');
    console.log("navi",file_structure);
    //console.log(file_names);
    //console.log("length",file_structure.length);

    var nav = document.getElementById("nav");
    var uld = document.createElement("ul");
    uld.setAttribute("id", "main");
    uld.classList.add("navbar-nav", "mr-auto");
    

    for (var i=0; i<file_structure.length; i++) {
      console.log(file_structure[i]);
      var key = Number(Object.keys(file_structure[i]));
      const key_split = key.toString().split(".");
      console.log("Key",key_split);

      var navi_name = file_structure[i][key]['navname'];

      if(key_split.length==1){
        console.log("1");
        
        let parent_div = uld;
        var ul_cat = document.createElement("ul"); 
        parent_div.appendChild(ul_cat);
        ul_cat.innerHTML= navi_name; 
      }
      // der teil rekursiv
      else{
        console.log("2");
        var a_id = file_structure[i][key]['filename'];
        var a_href=  a_id.toString().split(".")[0];
        console.log("Anam",a_href);
        var li_j = document.createElement("li"); 
        ul_cat.appendChild(li_j); 
        var a_tag =document.createElement("a");
        a_tag.href= '/post/'+a_href;
        
        a_tag.setAttribute("id", a_id);
        a_tag.innerHTML = navi_name;
        li_j.appendChild(a_tag);
      }


      // let parent_div = uld;
      //   var li_j = document.createElement("li"); 
      //   parent_div.appendChild(li_j); 
      //   var a_tag =document.createElement("a");
      //   // a_tag.href= '/post/'+file_all[i].name;
      //   // //a_tag.href= '/'+file_all[i].path;
        
      //   a_tag.setAttribute("id", file_structure[i].navname);
      //   a_tag.innerHTML = file_all[i].name;
      //   li_j.appendChild(a_tag);
      //   parent_div.appendChild(li_j);   
      //   parent_div = a_tag;
      
      
    }
    nav.appendChild(uld);
  
   
   
   
   ////////////////////////////////////////////////////
//    var file_all = require('../pages/post/data.json');
//     var nav = document.getElementById("nav");
//     var uld = document.createElement("ul");
//     uld.setAttribute("id", "main");
//     uld.classList.add("navbar-nav", "mr-auto");

// //*Hier v1 = mit ahref und nur ul li*/
//     //console.log("Hier: ", make_path(all_files));
//     // https://www.itgeared.com/css-multi-level-navigation-menu-tutorial/
//     var element_dict = {};

//     for (var i=0; i<file_all.length; i++) {
//       var files_path = file_all[i].path; 
      
//       let parent_div = uld;
//       var li_j = document.createElement("li"); 
//       parent_div.appendChild(li_j); 
//       var a_tag =document.createElement("a");
//       a_tag.href= '/post/'+file_all[i].name;
//       //a_tag.href= '/'+file_all[i].path;
      
//       a_tag.setAttribute("id", file_all[i].name);
//       a_tag.innerHTML = file_all[i].name;
//       li_j.appendChild(a_tag);
//       parent_div.appendChild(li_j);   
//       parent_div = a_tag;
//     }
//     nav.appendChild(uld);
  
     
  }, [])
  
  

  return (
    <div className='wrap-all'>
      <header>
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-bs-controls="nav" aria-bs-expanded="false" aria-bs-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="toggler-icon"></span>
          </button>

          <div id="nav" className='collapse navbar-collapse'>

          </div>
    
        </nav>
      </header>

      <div className='page-content'>
        <main className='container mx-auto flex-1'>{children}</main>
        <footer>
          <div>
            Prototype Version 4
          </div>
        </footer>
      </div>
    </div>
  );
}

function create_navigation(chil){
    var parent_folder = "posts";
    console.log("asdsaadsa", chil.document);
    var dict = {}
    //const all_files = _getAllFilesFromFolder(parent_folder);
    console.log("sdasdd", all_files);


//     var nav = chil.document.createElement("nav");
//     var ul= document.createElement('ul');
//     ul.setAttribute("id", "main");

//     nav.appendChild(ul);

//     for (i=0; i<all_files.length(); i++) {
//         
//         path_split = path.split("/");
//         console.log("path",path_split);

//         for (j=0; j<path_splt.length(); j++) {
//           var ul_j = document.getElementById(path_split[j])
//           if(ul_j == False) {
//             ul_j=document.createElement('ul'); 
//             ul_j.setAttribute("id", path_split[j]);

//           } 
//           ul.appendChild(ul_j)
          
//         }
//     }


}


// function make_path(paths){
//     var arr = [];
//     for (var i=0; i<paths.length; i++) {
//       var path = paths[i];
//       var path_split = path.split("/");
//       arr.push(path_split);

//     }
    

//     var tree_path = Object.fromEntries(arr);
//     console.log("Hier0: ", tree_path);

  
        

//     return tree_path
// }