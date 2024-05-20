import React from "react";
import Tick from "./Tick";

//
// Month breakdown component on /finance
//
export default function MonthBreakdown({ labels, data, averageData}) {

    //
    // Logic to generate tick based on the value of the cell compared to the average
    // Savings is opposite
    //
    function generateTick(value, average, index) {

        if(value > average) {  
            if(index === 9) {
                return(<Tick direction="up" styleClass="h-10 w-10 text-green-500 pb-2"/>)
            } else {
                return(<Tick direction="up" styleClass="h-10 w-10 text-red-500 pb-2"/>)
            }

        } else if(value < average) {
            if(index === 9) {
                return(<Tick direction="down" styleClass="h-10 w-10 text-red-500 pb-2"/>)
            } else {
                return(<Tick direction="down" styleClass="h-10 w-10 text-green-500 pb-2"/>)
            }

        } else {
            return(<Tick direction="line" styleClass="h-10 w-10 text-slate-900 pb-2"/>)
        }

    }

    //
    // Returned Component
    //
    return (

        <div className="table-fixed">
            <table>
                <thead>
                    <tr>

                        {labels?.map((item) => {
                            return(
                                <th key={Math.random()} className="px-7 xl:text-2xl">{item}</th>                     
                            );
                        })}

                    </tr>
                </thead>

                <tbody>
                    <tr>
                    
                        
                        {data?.map((item, index) => {
                            return(   
                                
                                <td key={Math.random()} className="group relative">
                                    <div className="flex flex-row xl:text-2xl justify-center">
                                        <p>{item}$</p>
                                        {generateTick(item, averageData[index], index)}
                                        <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Average: {averageData[index]}$</span>
                                    </div>
                                </td>             
                            );
                        })}

                    </tr>
                </tbody>
            </table>

        </div>

    );
}