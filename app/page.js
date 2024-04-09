'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';
import Auth from './components/auth.js';
import { checkAuth } from './util/checkAuth.js';

//
// Initial page that will prompt login
//
export default function Page() {

    const route = useRouter();

    //
    // Runs only on the first render
    //
    useEffect(() => {
      if(checkAuth() === true) {
          route.push("/dashboard");
      }
    }, []);

    return (
      <div className="h-full flex justify-center items-center">

        <Auth/>
        
      </div>
    );
}