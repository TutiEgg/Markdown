import Link from 'next/link';
// py = höhe, mt = abstand zur page Top
export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-teal-600 mt-2 py-4' > 
        <div className='container mx-auto flex justify-center'>
          <span className='mx-auto'>prototype test website</span>{' '}
        </div>
      </header>
      <nav>
        <Link href='/'>
            <a>🏡</a>
        </Link>
        <Link href = 'post/test'>
            <a>Lesson 1</a>
        </Link>  
      </nav>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-gray-400 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; Test Website 
        </div>
      </footer>
    </div>
  );
}
