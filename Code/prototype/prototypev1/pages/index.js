import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

// TODO startseite überarbeiten
//TODO Burgermenu 


// Get all posts
export async function getStaticProps() {

  // Filesystem = alle markdown-posts
  const files = fs.readdirSync('posts/index');

  // Loop durch all posts um title und image/video-objekte zubekommen
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '','.mdx'); // slug (URL) ohne .md
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
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/post/index/${slug}`}>
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
  );
}