import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// TODO startseite überarbeiten

// Get all posts
export async function getStaticProps() {

  // Filesystem = alle markdown-posts
  const files = fs.readdirSync('posts/index');

  // Loop durch all posts um title und image/video-objekte zubekommen
  const posts = files.map((fileName) => {
    //const slug = fileName.replace('.md', '','.mdx'); // slug (URL) ohne .md
    //const slug = fileName.split(".")[0] //lug (URL) ohne .md
    const slug = fileName
    const readFile = fs.readFileSync(`posts/index/${fileName}`, 'utf-8'); // Lesen der Datei
    const { data: frontmatter } = matter(readFile); // variable data zu frontmatter umwandeln
    return {
      slug,
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
  const [toggleViewMode, setToggleViewMode] = useState(true);
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
      
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug.split(".")[0]}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`post/${slug.split(".")[0]}`}>
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
