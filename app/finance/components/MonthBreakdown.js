import React from "react";

//
// Month breakdown component on /finance
//
export default function MonthBreakdown({ labels, data, averageData}) {

    // console.log(averageData);

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
                    
                        
                        {data?.map((item, index) => {
                            return(   
                                
                                <td key={Math.random()} className="group relative">
                                    <div className="flex flex-row text-2xl justify-center">
                                        <p>{item}</p>
                                        <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Average: {averageData[index]}</span>
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