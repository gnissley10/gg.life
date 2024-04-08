'use client'

import { useRouter } from 'next/navigation';

export default function Page() {

  const router = useRouter();


  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="text-black">Hello, Next.js! This is the Dashboard Page!</h1>
      <button className="bg-white rounded-lg text-black px-5" onClick={() => router.push('/')}>Home</button>
    </div>
  );
}