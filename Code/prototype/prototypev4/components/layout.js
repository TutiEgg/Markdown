import React from 'react';
import {useEffect} from "react";

export default function Layout({ children }) {  
  
  useEffect(() => {
    
    var file_structure = require('../pages/post/navi.json');
    
    var nav = document.getElementById("nav");
    var uld = document.createElement("ul");
    let parent_div = uld;
    uld.setAttribute("id", "main");
    uld.classList.add("navbar-nav", "mr-auto");
    
    var ul_array=new Array;
    for (var i=0; i<file_structure.length; i++) {
      console.log(file_structure[i]);
      var key = (Object.keys(file_structure[i]));
      const key_split = key.toString().split(".");
      var navi_name = file_structure[i][key]['navname'];
      var filename = file_structure[i][key]['filename'];
      

      if(!filename){
        console.log("1");
        var ul_folder = document.createElement("ul"); 
        ul_folder.innerHTML= navi_name;
        ul_folder.setAttribute("id", navi_name);
        console.log("2",ul_array[2])
        
        
        if(key_split.length==1){
          parent_div.appendChild(ul_folder);
          ul_array=[];
        }
        else{
          var parent = ul_array[key_split.length-2];
          
          //var parent = document.getElementById(id_array[1]);
          parent.appendChild(ul_folder);
          console.log("parent",parent);

        }
        ul_array.push(ul_folder);
        console.log("Array",ul_array);
        console.log(ul_array[0]);
        
      }
      else{
        console.log("2");
        var a_href=  filename.toString().split(".")[0];
        var li_j = document.createElement("li");        
        var a_tag =document.createElement("a");
        a_tag.href= '/post/'+a_href;
        a_tag.setAttribute("id", filename);
        a_tag.innerHTML = navi_name;
        li_j.appendChild(a_tag);

        if(key_split.length==1){
          parent_div.appendChild(li_j);
        } 
        else{
          ul_folder.appendChild(li_j); 
        }
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
