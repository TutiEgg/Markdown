import Link from 'next/link';
import fs from 'fs';

//TODO Styling überarbeiten
export default function Layout({ children }) {  
    
    //const test = _getAllFilesFromFolder("posts")
  return (
    <div>
        <header>
            create_navigation()
            <nav>
                <Link href='/'>
                    <a>🏡</a>
                </Link>
                <Link href = '/post/test'>
                    <a>Lesson 1</a>
                </Link>
                <Link href = '/post/sidegenerator'>
                    <a>Side Generator</a>
                </Link> 
                <Link href = '/post/cms'>
                    <a>CMS</a>
                </Link>
                <Link href = '/post/first'>
                    <a>MDX</a>
                </Link>  

            </nav>
        </header>
      
      <main className='container mx-auto flex-1'>{children}</main>
      <footer>
        <div>
            Prototype Version 1 
        </div>
      </footer>
    </div>
  );
}

function create_navigation(){
    parent_folder = "posts";
    var dict = {}
    const all_files = _getAllFilesFromFolder(parent_folder);
    var nav = document.createElement("nav");
    var ul=document.createElement('ul');
    ul.setAttribute("id", "main");

    for (i=0; i<all_files.length(); i++) {
        path = all_files[i];
        path_split = path.split("/");
        for (j=0; j<path_splt.length(); i++) {
            

        }
    }

    var aElement = document.querySelector("a"); 
    aElement.setAttribute("href", "/index/.."); 


}

function append_to_dict(input) {
    for (var i = 0; i < input.length; i++) {
        var datum = input[i];
        if (!d[datum.key]) {
            d[datum.key] = [];
        }
        d[datum.key].push(datum.val);
    }
}

/*
<nav>
  <ul id="main">
    <li>Home</li>
    <li>index</li>
    <li>Sgg
      <ul class="drop">
        <div>
        <li>cms</li>
        <li>test</li>
        <li>siodegenerator</li>
        </div>
      </ul>
    </li>
    <li>overview</li>
    <div id="marker"></div>
  </ul>
</nav>
*/

/* 
var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];
  
    filesystem.readdirSync(dir).forEach(function(file) {
  
        file = dir+'/'+file;
        var stat = filesystem.statSync(file);
  
        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);
  
    });
  
    return results;
  
  };
*/