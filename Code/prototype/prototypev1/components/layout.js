import Link from 'next/link';
import fs from 'fs';

//TODO Styling überarbeiten
export default function Layout({ children }) {  
    
    const test = _getAllFilesFromFolder("posts")
  return (
    <div>
        <header>
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