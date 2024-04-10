'use client'
import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";
import { checkAuth } from "../util/checkAuth";
import { averages, month, totals } from "../api/sheets";


//
// Finance Dashboard Page
//
export default function Page() {

        const route = useRouter();
        const labels = ["Rent", "Electric", "Internet/Phone", "Loans", "Other", "Total Spent", "Budget", "Savings"];

        // Hooks
        const [data, setData] = useState([]);

        //
        // Runs only on the first render
        //
        useEffect(() => {
            
            // Get Averages of year
            // averages("2024")
            //     .then((result) => {
            //         console.log(result);
            //         setData(result["values"]);
            //     });

            // Get month data
            // month("2024", "2")
            //     .then((result) => {
            //         console.log(result);
            //         setData(result["values"]);
                    
            //     });

            // Get Totals of year
            // totals("2024")
            // .then((result) => {
            //     console.log(result);
            //     setData(result["values"]);
                
            // });
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