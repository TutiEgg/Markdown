import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

//TODO CMS einbindung, eventuell 


export async function getStaticPaths() {
  const files = fs.readdirSync('posts/index');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.split(".")[0],
      format: fileName.split(".")[1],
     // format: fileName.split(".")[-1],
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug , format} }) {
  //const fileName = fs.readFileSync(`posts/index/${slug}.`.format(), 'utf-8');

  console.log(format);
  const fileName = fs.readFileSync(`posts/index/${slug}.${format}`, 'utf-8');
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