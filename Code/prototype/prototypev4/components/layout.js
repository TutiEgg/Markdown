import Link from 'next/link';
import * as fs from 'fs';
import React from 'react';
import {useEffect} from "react";
import * as ReactDOM from 'react-dom';


// function path_to_dict(path_list) {
//   var dic = {};
//   for (path in path_list) {
//     for (val in path) {
//       if (){
        
//       }
//     }
//   }
// }




//TODO Styling überarbeiten
export default function Layout({ children }) {  
  
  
  useEffect(() => {
     
    var all_files = require('./navigation_layout.json'); 
    var nav = document.getElementById("nav");
    
    var uld = document.createElement("ul");
    uld.setAttribute("id", "main");

  

//*Hier v1 = mit ahref und nur ul li*/

    //console.log("Hier: ", make_path(all_files));
    // https://www.itgeared.com/css-multi-level-navigation-menu-tutorial/
    var element_dict = {};

    for (var i=0; i<all_files.length; i++) {
        var path = all_files[i];
        var path_split = path.split("/");
        console.log("path",path_split);

        let parent_div = uld;
        var ul = document.createElement('ul');
        parent_div.appendChild(ul); 


        for (var j=0; j<path_split.length; j++) {
          
          if (j == path_split.length-1){
            var element = "li";
          }else{
            var element = "ul";
          }

          if (path_split[j] in element_dict){
            console.log("2");
            var ul_j = element_dict[path_split[j]] 
            parent_div.appendChild(ul_j); 
            parent_div = ul_j;

          }  else {
            
            console.log("1");
            var li_j = document.createElement(element);
            ul_j=document.createElement("a"); 

            ul_j.setAttribute("id", path_split[j]);
            ul_j.innerHTML = path_split[j];

            li_j.appendChild(ul_j)
            parent_div.appendChild(li_j);   

            element_dict[path_split[j]] = ul_j;
            parent_div = ul_j;
          } 
          
          
        }
    
    }
    nav.appendChild(uld);
/*v1 bis hier */


    /*
    // v2 mit buttons in navi
    uld.classList.add("navbar");


    //console.log("Hier: ", make_path(all_files));
    // https://www.itgeared.com/css-multi-level-navigation-menu-tutorial/
    var element_dict = {};

    for (var i=0; i<all_files.length; i++) {
        var path = all_files[i];
        var path_split = path.split("/");
        console.log("path",path_split);

        let parent_div = uld;
        var div = document.createElement('div');
        div.classList.add("subnav");
        parent_div.appendChild(div); 


        for (var j=0; j<path_split.length; j++) {
          
          
          if (path_split[j] in element_dict){
            console.log("2");
            var ul_j = element_dict[path_split[j]] 
            if (j == 0){
              ul_j.classList.add("subnav");
            }else{
              ul_j.href = "";
            }
            parent_div.appendChild(ul_j); 
            parent_div = ul_j;

          }  else {
            
            console.log("1");
            ul_j=document.createElement('a'); 
            ul_j.setAttribute("id", path_split[j]);
            ul_j.innerHTML = path_split[j];
            if (j == 0){
              ul_j.classList.add("subnav");
            }else{
              ul_j.href = "";
            }
            parent_div.appendChild(ul_j);   
            element_dict[path_split[j]] = ul_j;
            parent_div = ul_j;
          } 
          
          
        }
    
    }
    nav.appendChild(uld);
    // v2 bis hier
    */
    

    //var di = {};
    
  
/*
    for (var i=0; i<all_files.length; i++) {
      var t = all_files[i];
      var path_split = t.split("/");
      for (var j=0; j<path_split.length-1; j++) {
        // console.log("t",t);
        // console.log("Teil",di[path_split[j]]);
        // console.log("J",j);
        if (!di[path_split[j]]){
          console.log("new", t);
          di[path_split[j]] = [path_split[j+1]];
          di[[path_split[j]]].push(t.val);
        }
        else{
          console.log("exists ",t);
          //console.log("Path",[di[path_split[j]]]);
          //console.log("oldPath", [path_split[j]]);
          var dirname = [path_split[j]].toString();
          console.log(dirname);
          console.log("Indexlength",di["index"].length);
          console.log([di[dirname]].length);
          console.log([di[path_split[j]]].length);
          //console.log([di[dirname]][[di[2]]]);
          //console.log("length",[di[path_split[j]]][[di[path_split[j]]].length]);

          if (di[path_split[j]]== di["index"]){
            //console.log("index");
            //console.log(di[path_split[j]]);
            //console.log(di["index"].length);
            di["index"][di["index"].length]= [path_split[j+1]].toString();
            // t.val = undefined why ?
          }
          else if (di[path_split[j]]== di["ssg"]){
            di["ssg"][di["ssg"].length]= [path_split[j+1]].toString();
          }
        }
        // di[[path_split[j]]].push(t.val);
      }
  }   
  console.log("Hier2: ", di);

  */

    // for (var i=0; i<all_files.length; i++) {
    //   var t = all_files[i];
    //   var path_split = t.split("/");
    //   for (var j=0; j<path_split.length-1; j++) {
    //     console.log("t",t);
    //     console.log("Teil",di[path_split[j]]);
    //     console.log("J",j);
    //     if (!di[path_split[j]]){
    //       console.log("new", t);
    //       di[path_split[j]] = [path_split[j+1]];
    //       di[[path_split[j]]].push(t.val);
    //     }
    //     else{
    //       console.log("exists ",t);
    //       if (di[path_split[j]]== di["index"]){
    //         console.log("index");
    //         // console.log(di[path_split[j]]);
    //         console.log(di["index"].length);
    //         di["index"][di["index"].length]= [path_split[j+1]];
    //         // t.val = undefined why ?
    //       }
    //     }
    //     // di[[path_split[j]]].push(t.val);
    //   }
    // }  
    //console.log("Hier2: ", di);
     
  }, [])
  
  'posts/index/cms.md',
  'posts/index/first.mdx',
  'posts/index/sidegenerator.md',
  'posts/index/test.md',
  'posts/index.md',
  'posts/ssg/gatsby.md',
  'posts/ssg/hugo.md',
  'posts/ssg/next.md'
  

  return (
    <div>
        <header> 
            <nav id= "nav">

            </nav>
        </header>
      
      <main className='container mx-auto flex-1'>{children}</main>
      <footer>
        <div>
            Prototype Version 4 
        </div>
      </footer>
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