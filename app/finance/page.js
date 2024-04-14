'use client'
import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";
import { checkAuth } from "../util/checkAuth";
import { SHEETS_AVERAGES, SHEETS_MONTH, SHEETS_TOTALS } from "../api/sheets";
import MonthBreakdown from "./components/MonthBreakdown";
import { motion } from "framer-motion";


//
// Finance Dashboard Page
//
export default function Page() {

        const route = useRouter();
        const labels = ["Rent", "Electric", "Internet", "Loans", "Credit Card", "Bank", "Phone", "Total Spent", "Budget", "Savings"];
        const d = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        // Hooks
        const [monthData, setMonthData] = useState([]);
        const [month, setMonth] = useState(d.getMonth());
        const [averageData, setAverageData] = useState([]);
        const [totalData, setTotalData] = useState([]);

        //
        // Get data for first render
        //
        useEffect(() => {
            
            // Get Averages of year
            SHEETS_AVERAGES("2024").then((result) => {setAverageData(result);});

            // Get month data
            SHEETS_MONTH("2024", month).then((result) => { setMonthData(result);});

            // Get Totals of year
            SHEETS_TOTALS("2024").then((result) => {setTotalData(result);});
        }, []);

        return(
            <div className="h-full flex flex-col justify-center items-center">


                {/* Graphs */}
                <div className="flex bg-white rounded-lg shadow-md w-4/5 h-3/5">

                    <div className="flex flex-col justify-center mx-auto">
                        <h2 className="text-center text-4xl font-medium text-black pt-8">{d.getFullYear()} Breakdown</h2>

                        <div className="flex flex-row mx-auto items-center">
                            <div>
                                {totalData?.map((item) => {
                                    return(
                                        <p key={item}>{item}</p>
                                    );
                                })}
                            </div>
                            <div>
                                {averageData?.map((item) => {
                                    return(
                                        <p key={item}>{item}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Month Breakdown */}
                <div className="flex bg-white rounded-lg shadow-md w-4/5 h-1/4 mt-10">
                    <div className="flex flex-col mx-auto">    

                        <motion.div
                                key={month}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                        <h2 className="text-center text-4xl font-medium text-black pt-8">{months[month - 1]} Breakdown</h2>
                        </motion.div>

                        <div className="pt-8 flex flex-row">

                            {/* Left Arrow */}
                            {month == 1 
                                ? null
                                : <svg onClick={() => [SHEETS_MONTH("2024", month - 1).then((result) => { setMonthData(result);}), setMonth(month - 1)]} className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                                  </svg> }

                            <motion.div
                                key={month}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <MonthBreakdown labels={labels} data={monthData} averageData={averageData}/>
                            </motion.div>

                            {/* Right Arrow */} 
                            {d.getMonth() == month 
                                ? null 
                                : <svg  onClick={() => [SHEETS_MONTH("2024", month + 1).then((result) => { setMonthData(result);}), setMonth(month + 1)]} className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                  </svg> }

                        </div>
                        
                    </div>
                </div>

            </div>
        );

}