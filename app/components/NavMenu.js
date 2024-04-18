'use client'
import React, { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

//
// Returned Component
//
export default function NavMenu() {

    function logOut(route) {
        auth.signOut().then(function() {
            console.log('Signed Out');
            route.push('/')
          }, function(error) {
            console.error('Sign Out Error', error);
        });
    }

    function generateStyle(match) {
        if(usePathname() === match) {
            return "shadow-md border border-red-400 px-4 mx-4 py-1 text-xl font-medium bg-red-400 text-white rounded-md hover:bg-white hover:text-red-400";
        } else {
            return "shadow-md border border-red-400 px-4 mx-4 py-1 text-xl font-medium bg-white text-red-400 rounded-md hover:bg-red-400 hover:text-white";
        }
    }

    const route = useRouter();

    return(
        <nav className="h-16 flex bg-white border-b-4 border-red-400">

            <div className="flex">
                <h2 className="drop-shadow-md self-center text-4xl font-medium pl-8 text-red-400">GG.LIFE</h2>
            </div>

            <div className="ml-10 w-full flex flex-row">

                <div className="self-center">
                    <button className={generateStyle("/finance")}>Finance</button>
                </div>

                <div className="self-center ml-auto">
                    <button onClick={() => logOut(route)}className="shadow-md border border-red-400 px-4 mx-4 py-1 text-xl font-medium bg-white text-red-400 rounded-md hover:bg-red-400 hover:text-white">Log Out</button>
                </div>

            </div>
        </nav>
    );
}