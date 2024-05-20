'use client'
import React from "react";
import { useState, useEffect, useRef } from "react";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";
import { checkAuth } from "../util/checkAuth";
import { SHEETS_AVERAGES, SHEETS_MONTH, SHEETS_TOTALS, SHEETS_MONTH_TOTALS, SHEETS_MONTH_SAVINGS, SHEETS_MONTH_BUDGET } from "../api/sheets";
import MonthBreakdown from "./components/MonthBreakdown";
import { motion } from "framer-motion";
import "chart.js/auto";
import { Bar, Line } from 'react-chartjs-2'; 
import NavMenu from "../components/NavMenu";
import GraphBreakdown from "./components/GraphBreakdown";
import BillSchedule from "./components/BillSchedule";


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
        const [savingsData, setSavingsData] = useState([])
        const [budgetData, setBudgetData] = useState([])

        //
        // Get data for first render
        //
        useEffect(() => {

            //
            // If not authenticated - redirect to login
            //
            if(!checkAuth()) {
                route.push("/")
            } 
            
            // Get Averages of year
            SHEETS_AVERAGES("2024").then((result) => {setAverageData(result.map(e => Math.round(Number(e.replace(',', '')))))});

            // Get month data
            SHEETS_MONTH("2024", month).then((result) => {setMonthData(result.map(e => Math.round(Number(e.replace(',', '')))))});
                        
            // Get totals of each month
            SHEETS_MONTH_TOTALS("2024").then((result) => {setTotalData(result.map(e => Math.round(Number(e.replace(',', '')))))})

            // Get savings for each month
            SHEETS_MONTH_SAVINGS("2024").then((result) => {setSavingsData(result.map(e => Math.round(Number(e.replace(',', '')))))})

            // Get savings for each month
            SHEETS_MONTH_BUDGET("2024").then((result) => {setBudgetData(result.map(e => Math.round(Number(e.replace(',', '')))))})

        }, []);

        //
        // Returned HTML
        //

        return(
            <div className=''>
            <NavMenu/>
            <div className="flex flex-col justify-center items-center pt-12 h-5/6">

                <div className="flex flex-col xl:flex-row h-3/4 w-11/12 justify-center">
                    {/* Graphs */}
                    <GraphBreakdown totalData={totalData} savingsData={savingsData} budgetData={budgetData} />

                    {/* Bill Schedule */}
                    <BillSchedule/>
                </div>

                {/* Month Breakdown */}
                <div className="overflow-auto flex bg-white rounded-lg shadow-md w-11/12 h-1/4 mt-8">
                    <div className="flex flex-col mx-auto">    

                        <motion.div key={month} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        
                            <h2 className="text-center text-4xl font-medium text-black pt-8">{months[month]} Breakdown</h2>

                        </motion.div>

                        <div className="pt-4 flex flex-row mb-6 w-full h-full">

                            {/* Left Arrow */}
                            {month === 0 
                                ? <div className="h-8 w-8"></div>
                                : <svg onClick={() => [SHEETS_MONTH("2024", month - 1).then((result) => { setMonthData(result.map(e => Math.round(Number(e.replace(',', '')))))}), setMonth(month - 1)]} className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                                  </svg> }

                            <motion.div key={month} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>

                                <MonthBreakdown labels={labels} data={monthData} averageData={averageData}/>

                            </motion.div>

                            {/* Right Arrow */} 
                            {month === d.getMonth()
                                ? <div className="h-8 w-8"></div>
                                : <svg  onClick={() => [SHEETS_MONTH("2024", month + 1).then((result) => { setMonthData(result.map(e => Math.round(Number(e.replace(',', '')))))}), setMonth(month + 1)]} className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                  </svg> }

                        </div>
                        
                    </div>
                </div>

            </div>
            </div>
        );

}