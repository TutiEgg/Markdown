import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

//TODO CMS einbindung, eventuell 

export async function getStaticPaths() {
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
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
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
  
