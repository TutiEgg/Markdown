import React from 'react';
import {useEffect} from "react";

export default function Layout({ children }) {  
  
  useEffect(() => {
    
    var file_structure = require('../pages/post/navi.json');
    console.log("navi",file_structure);

    var nav = document.getElementById("nav");
    var uld = document.createElement("ul");
    let parent_div = uld;
    uld.setAttribute("id", "main");
    uld.classList.add("navbar-nav", "mr-auto");
    
    var id_array=new Array;
    for (var i=0; i<file_structure.length; i++) {
      console.log(file_structure[i]);
      var key = (Object.keys(file_structure[i]));
      const key_split = key.toString().split(".");
      console.log("Key",key_split);

      var navi_name = file_structure[i][key]['navname'];
      var a_id = file_structure[i][key]['filename'];
      

      if(!a_id){
        console.log("1");
        var ul_cat = document.createElement("ul"); 
        ul_cat.innerHTML= navi_name;
        ul_cat.setAttribute("id", navi_name);
        console.log("2",id_array[2])
        
        
        if(key_split.length==1){
          parent_div.appendChild(ul_cat);
          id_array=[];
        }
        else{
          var parent = id_array[key_split.length-2];
          
          //var parent = document.getElementById(id_array[1]);
          parent.appendChild(ul_cat);
          console.log("parent",parent);

        }
        id_array.push(ul_cat);
        console.log("Array",id_array);
        console.log(id_array[0]);
        
      }
      // der teil rekursiv 
      // while key.length stays the same append li else rekursion 
      // ignorieren der Zahlenreihenfolge, wichtig ?
      // leerer Namensordner ahref lösung 
      else{
        console.log("2");
        var a_href=  a_id.toString().split(".")[0];
        var li_j = document.createElement("li");        
        var a_tag =document.createElement("a");
        a_tag.href= '/post/'+a_href;
        a_tag.setAttribute("id", a_id);
        a_tag.innerHTML = navi_name;
        li_j.appendChild(a_tag);

        if(key_split.length==1){
          parent_div.appendChild(li_j);
        } 
        else{
          ul_cat.appendChild(li_j); 
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
