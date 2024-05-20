import React from "react";


//
// Bill Schedule Component
//
export default function BillSchedule() {

    //
    // Schedule Object
    //
    const schedule = {
        "Internet": {"date": 1, "amount": 55},
        "GLoan": {"date": 6, "amount": 276},
        "Rav-4 Loan": {"date": 7, "amount": 300},
        "PPL": {"date": 7, "amount": "~~"},
        "Phone": {"date": 7, "amount": 25},
        "ELoans": {"date": 17, "amount": 350}
    }

    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    console.log(d.getDate())


    return(
        <div className="overflow-auto flex flex-col bg-white rounded-lg shadow-md w-full xl:w-2/5 xl:ml-8 items-center mt-8 xl:mt-0">
    
                <h2 className="text-center text-4xl font-medium text-black pt-8">Bill Schedule</h2>

                <table className="table w-4/5 mt-6 shadow-md rounded-md border border-separate border-black mb-6">
                    <thead>
                        <tr>
                            <th className="text-xl">Description</th>
                            <th className="text-xl">Date</th>
                            <th className="text-xl">Amount</th>
                            <th className="text-xl">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {Object.keys(schedule).map((element, index) => {

                                if(d.getDate() > schedule[element]["date"]) {
                                    return (
                                        <tr key={element} className="">
                                            <td className="pl-5 py-3">{element}</td>
                                            <td className="text-center py-3">{d.getMonth() + 1}/{schedule[element]["date"]}</td>
                                            <td className="text-center py-3">{schedule[element]["amount"]}$</td>
                                            <td className="text-center py-3 text-green-500">PAID</td>
                                        </tr>
                                  )
                                } else {
                                    return (
                                        <tr key={element} className="">
                                            <td className="pl-5 py-3">{element}</td>
                                            <td className="text-center py-3">{d.getMonth() + 1}/{schedule[element]["date"]}</td>
                                            <td className="text-center py-3">{schedule[element]["amount"]}$</td>
                                            <td className="text-center py-3">PENDING</td>
                                        </tr>
                                  )
                                }                          
                            })}
                      
                    </tbody>
                </table> 


        </div>
    );
}