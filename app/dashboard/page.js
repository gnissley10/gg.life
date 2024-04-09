'use client'
import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";
import { checkAuth } from "../util/checkAuth";

//
// 
//
export default function Page() {

        const route = useRouter();

        //
        // Runs only on the first render
        //
        useEffect(() => {
            if(checkAuth() === false) {
                route.push("/");
            }
        }, []);


        return(
            <div className="h-full flex flex-col justify-center items-center">
                {/* Graphs */}
                <div className="flex bg-white rounded-lg shadow-md w-4/5 h-3/5">
                    <div className="flex flex-row mx-auto items-center">

                    </div>
                </div>

                {/* Month Breakdown */}
                <div className="flex bg-white rounded-lg shadow-md w-4/5 h-1/4 mt-10">

                </div>

            </div>
        );

}