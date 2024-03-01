import Link from 'next/link';
import "./globals.css"

export default function Home() {
  return (
    <div>
      <Link href="/data">
        <button>Go to Data Page</button>
      </Link>
      
      <div>
    <Link href="/graph-test">
      <button>Go to Graph Page</button>
    </Link>
  </div>
  
    </div>
  );
}