import Link from 'next/link';
import Homepage from './home/page';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <Homepage />
      </div>
    </>
  );
}
