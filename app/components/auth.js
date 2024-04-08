'use client'
import React from "react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

async function signIn(email, password) {
    // drop67care

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Logged in as: " + user.email)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}

//
// Sign in with firebase
//
export default function Auth() {

    // Hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
        <div className="flex flex-col">
            <label>Email</label>
            <input className="text-black rounded-md px-1.5" type="text" onChange={e => setEmail(e.target.value)}/>
            <label>Password</label>
            <input className="text-black rounded-md px-1.5" type="password" onChange={e => setPassword(e.target.value)}/>
            <button className="bg-white rounded-full text-black mt-8 pt-2 pb-2" onClick={() => signIn(email, password)}>Login</button>
        </div>
    );
}