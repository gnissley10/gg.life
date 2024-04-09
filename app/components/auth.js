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
        route.push('/dashboard');
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
            <div className="flex flex-col justify-center mx-auto">
                <h2 className="text-center text-6xl font-bold text-black pb-16">GG.LIFE</h2>
                <label className="self-center">Email</label>
                <input className="text-black rounded-md pt-1 pl-1 pb-1 border border-black" type="text" onChange={e => setEmail(e.target.value)}/>
                <label className="self-center mt-4">Password</label>
                <input className="text-black rounded-md pt-1 pl-1 pb-1 border border-black" type="password" onChange={e => setPassword(e.target.value)}/>
                <button className="bg-white rounded-full text-black mt-8 pt-2 pb-2 border border-black" onClick={() => signIn(email, password, route)}>Login</button>
            </div>
        </div>
    );
}