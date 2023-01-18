import React from 'react';
import {useEffect} from "react";
<<<<<<< Updated upstream
=======
import * as ReactDOM from 'react-dom';

function readTextFile(file)
{
  // npm install xhr2
  var XMLHttpRequest = require('xhr2');

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    return rawFile.send(null);
}



>>>>>>> Stashed changes

// können zahlen nicht in reihenfolge liegen 
//txt zu json 
export default function Layout({ children }) {  
<<<<<<< Updated upstream
  
=======
    
>>>>>>> Stashed changes
  useEffect(() => {
    
    var file_structure = require('../pages/post/navi.json');
    var nav = document.getElementById("nav");
    var uld = document.createElement("ul");
    let parent_div = uld;
    uld.setAttribute("id", "main");
    uld.classList.add("navbar-nav", "mr-auto");
    
<<<<<<< Updated upstream
    var ul_array=new Array;
    for (var i=0; i<file_structure.length; i++) {
      console.log(file_structure[i]);
      var key = (Object.keys(file_structure[i]));
      const key_split = key.toString().split(".");
      var navi_name = file_structure[i][key]['navname'];
      var filename = file_structure[i][key]['filename'];
=======

//*Hier v1 = mit ahref und nur ul li*/
    //console.log("Hier: ", make_path(all_files));
    // https://www.itgeared.com/css-multi-level-navigation-menu-tutorial/
    var element_dict = {};

    for (var i=0; i<file_all.length; i++) {
      var files_path = file_all[i].path; 
      
      let parent_div = uld;
      var li_j = document.createElement("li"); 
      parent_div.appendChild(li_j); 
      var a_tag =document.createElement("a");
      a_tag.href= '/post/'+file_all[i].name;
      //a_tag.href= '/'+file_all[i].path;
>>>>>>> Stashed changes
      
      if(!filename){
        var folder = document.createElement("li"); 
        
        if(key_split.length==1){
          parent_div.appendChild(folder);
          ul_array=[];
        }
        else{
          folder.classList.add("sub-menu");
          var parent = ul_array[key_split.length-2];
          console.log(ul_array);
  
          if(ul_array[key_split.length-1]!= undefined ){
            console.log("arraylegnth:",ul_array.length,"keysplitleght",key_split.length, "both",ul_array.length-key_split.length)
            ul_array.splice(key_split.length-1,key_split.length);
            
          }
          if(parent.tagName=="LI"){
            folder = document.createElement("ul");
          }
          parent.appendChild(folder);
          console.log("parent",parent);
        }
        folder.setAttribute("id", navi_name);
        var div_folder= document.createElement("div");
        folder.appendChild(div_folder);
        div_folder.innerHTML= navi_name;
        ul_array.push(folder);
        
      }
      else{
        var a_href=  filename.toString().split(".")[0];
        var element = document.createElement("li");        

        if(key_split.length==1){
          parent_div.appendChild(element);
        } 
        else{
          if(folder.tagName=="LI"){
            element = document.createElement("ul");
          }
          folder.appendChild(element); 
        }
        var a_tag =document.createElement("a");
        a_tag.href= '/post/'+a_href;
        a_tag.setAttribute("id", filename);
        a_tag.innerHTML = navi_name;
        element.appendChild(a_tag);
      }  
    }
    nav.appendChild(uld);     
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