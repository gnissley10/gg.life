'use client'
import { useRouter } from 'next/navigation';
import Auth from './components/auth.js';

//
// Initial page that will prompt login
//
export default function Page() {

  return (
    <div className="h-full flex justify-center items-center">

      <Auth/>
      
    </div>
  );
}