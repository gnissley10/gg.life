import React from "react";
import { motion } from "framer-motion"

//
// Month breakdown component on /finance
//
export default function MonthBreakdown({ labels, data, averageData}) {
    return (

        <div className="table-fixed">
            <table>
                <thead>
                    <tr>

                        {labels?.map((item) => {
                            return(
                                <th key={Math.random()} className="px-7 text-2xl">{item}</th>                     
                            );
                        })}

                    </tr>
                </thead>

                <tbody>
                    <tr>
                    
                        
                        {data?.map((item) => {
                            return(   
                                
                                <td key={Math.random()} className="group relative">
                                    <div className="flex flex-row text-2xl justify-center">
                                        <p>{Math.round(parseFloat(item.replace(',', '')))}</p>
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