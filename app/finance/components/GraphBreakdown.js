import React from "react";
import { useState } from "react";
import "chart.js/auto";
import { Bar, Line } from 'react-chartjs-2'; 

//
// Graph Breakdown component
//
export default function GraphBreakdown({ totalData, savingsData, budgetData}) {

    //
    // Properties for Line Chart
    //
    const lineChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
            label: 'Spending',
            data: totalData,
            fill: false,
            backgroundColor: "#dc2626",
            borderColor: '#dc2626',
            tension: 0.1
        },
        ],
    };

    //
    // Properties for Bar Chart
    //
    const barChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
            label: 'Savings',
            data: savingsData,
            fill: false,
            backgroundColor: "#6ed266",
            tension: 0.1
        },
        {
            label: 'Budget',
            data: budgetData,
            fill: false,
            backgroundColor: 'rgb(37, 150, 190)',
            tension: 0.1
        },
        ],
    };

    // Hooks
    const [graph, setGraph] = useState("spending");

    function displayGraph() {

        if(graph === "spending") {

            return(
                <div className="flex flex-col justify-center self-center w-full">

                    <div className='p-8 self-center w-5/6'>
                        <h2 className="text-center text-4xl font-medium text-black pb-6">Monthly Spending</h2>
                        <Line data={lineChartData} />
                    </div>

                    <div className="flex flex-row justify-center">
                        <svg onClick={() => setGraph("spending")} className="h-6 w-6 text-black mx-1" viewBox="0 0 24 24"  fill="black"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" /></svg>
                        <svg onClick={() => setGraph("budget")} className="h-6 w-6 text-black mx-1" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    
                </div>
            )
        } if(graph === "budget") {

            return(
                <div className="flex flex-col justify-center self-center w-full">

                    <div className='p-8 self-center w-5/6'>
                        <h2 className="text-center text-4xl font-medium text-black pb-6">Savings vs. Budget</h2>
                        <Bar data={barChartData} />
                    </div>

                    <div className="flex flex-row justify-center">
                        <svg onClick={() => setGraph("spending")} className="h-6 w-6 text-black mx-1" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" /></svg>
                        <svg onClick={() => setGraph("budget")} className="h-6 w-6 text-black mx-1" viewBox="0 0 24 24"  fill="black"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    
                </div>
            )
        }
    }

    //
    // Returned Component
    //
    return (

        <div className="flex flex-row bg-white rounded-lg shadow-md w-3/5 border-2">

            {/* Left Arrow */}
            {graph === "spending"
                ? <div className="h-8 w-8"></div>
                : <svg onClick={() => setGraph("spending")} className="h-8 w-8 text-black self-center"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                  </svg> }

            {displayGraph()}

            {/* Right Arrow */} 
            {graph === "budget"
                ? <div className="h-8 w-8"></div>
                : <svg  onClick={() => setGraph("budget")} className="h-8 w-8 text-black self-center"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg> }


        </div>

    );
}