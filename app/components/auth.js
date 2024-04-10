'use client'
import React from "react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

//
// Sign in function using Firebase's built in auth function signInWithEmailAndPassword() then send User to finance dashboard
//
async function signIn(email, password, route) {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        route.push('/finance');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}

//
// Auth component to lock everyone out except me - (I'm the only user)
//
export default function Auth() {

    const route = useRouter();

    // Hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
        <div className="flex bg-white rounded-lg shadow-md basis-1/3 h-3/5">
            <div className="flex flex-col justify-center mx-auto w-96">
                <h2 className="text-center text-6xl font-bold text-gray-800 pb-16">GG.LIFE</h2>

                <input className="self-center text-gray-800 rounded-md pl-1 bg-gray-50 shadow-md w-64 h-10" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>

                <input className="self-center text-gray-800 rounded-md pl-1 bg-gray-50 shadow-md mt-8 w-64 h-10" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>

                <button className="self-center bg-gray-800 rounded-md text-white mt-16 pt-2 pb-2 border border-black shadow-md w-48" onClick={() => signIn(email, password, route)}>Login</button>
            </div>
        </div>
    );
}