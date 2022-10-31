import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// TODO startseite überarbeiten
//TODO Burgermenu

// Get all posts
export async function getStaticProps() {

  

  // Filesystem = alle markdown-posts
  const files = fs.readdirSync('posts/index');

  // Loop durch all posts um title und image/video-objekte zubekommen
  const posts = files.map((fileName) => {
    // const slug = fileName.replace('.mdx', ''); // slug (URL) ohne .md
    const name  = fileName.split(".")[0];
    const format  = fileName.split(".")[1];
    const readFile = fs.readFileSync(`posts/index/${fileName}`, 'utf-8'); // Lesen der Datei
    const { data: frontmatter } = matter(readFile); // variable data zu frontmatter umwandeln
    return {
      name,
      format,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

// Home-page {posts} um alle Variablen von jedem Post zubekommen 
export default function Home({ posts }) {
  var [toggleViewMode, setToggleViewMode] = useState(false);
  console.log(toggleViewMode)
  return (
    <>
    <div className='flex justify-end p-5'>
      <button
        className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'
        onClick={() => setToggleViewMode(!toggleViewMode)}
      >
        {toggleViewMode ? 'grid' : 'list'}
      </button>
    </div>

    <div className={`grid grid-cols-${toggleViewMode ? '1' : '3'} gap-4 p-5`}>
      {posts.map(({ name, format, frontmatter }) => (
        <div
          key={name}
          className='card border rounded-xl flex flex-col'
        >
          <Link href={`/post/${name}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.imgtitle}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}