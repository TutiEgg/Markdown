import Link from 'next/link';
// TODO eigenen Header und Footer bauen
//TODO Styling überarbeiten
export default function Layout({ children }) {
  return (
    <div>
        <header>
            <nav>
                <Link href='/'>
                    <a>🏡</a>
                </Link>
                <Link href = 'post/index/test'>
                    <a>Lesson 1</a>
                </Link>
                <Link href = 'post/index/sidegenerator'>
                    <a>Side Generator</a>
                </Link> 
                <Link href = 'post/index/cms'>
                    <a>CMS</a>
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
