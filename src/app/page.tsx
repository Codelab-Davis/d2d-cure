import Link from 'next/link';
import "./globals.css"
//test change
export default function Home() {
  return (
    <div>
      <Link href="/data">
        <button>Go to Data Page</button>
      </Link>
    </div>
  );
}