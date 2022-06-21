import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

//TODO CMS einbindung, eventuell 

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


export async function getStaticPaths() {
  const files_all = _getAllFilesFromFolder("posts");
  console.log("All files:", files_all);
  const files = fs.readdirSync('posts/index');
  const paths = files.map((fileName) => ({
    params: {
      //slug: fileName.replace('.mdx', '','.md'),
      //slug: fileName.split(".")[0],
      slug: fileName,
      fileformat: fileName.split(".")[-1],
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
/*
export async function getStaticProps({ params: { slug, fileformat } }) {

  console.log("Hier" + fileformat);
  if (fileformat == "md"){
    const fileName = fs.readFileSync(`posts/index/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  } else if(fileformat == "mdx") {
    const fileName = fs.readFileSync(`posts/index/${slug}.mdx`, 'utf-8'); 
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  } else {
    const fileName = fs.readFileSync(`posts/index/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }
  
  
}*/

export async function getStaticProps({ params: { slug } }) {

 
  const fileName = fs.readFileSync(`posts/index/${slug}`, 'utf-8');
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