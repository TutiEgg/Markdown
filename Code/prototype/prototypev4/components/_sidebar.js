import Link from 'next/link';
//TODO Burgermenu 

export default function SideBar({ children }) {
  return (
    <div>
        <header>
            <nav class = 'sidenav'>
                
                <Link href='post/sidegenerator'>
                    <a>Side Generator</a>
                </Link>
               
                
                <Link href = 'post/ssg/next'>
                    <a>Next</a>
                </Link>
                <Link href = 'post/ssg/hugo'>
                    <a>Hugo</a>
                </Link> 
                <Link href = 'post/ssg/gatsby'>
                    <a>Gatsby</a>
                </Link> 
            </nav>
        </header> 
    </div>
  );
}