
import Link from 'next/link';

export default function Home() {
  return (
 <main>
     <div className="container">
      <h2> Quiz App </h2>
      <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>  
    </div> 
 </main>
  );
}
