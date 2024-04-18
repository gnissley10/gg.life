
//
// Call sheets API to get averages for given year
//
export async function SHEETS_AVERAGES(year) {

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!A2:K2?alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then(async (result) =>  {
        const jsondata = await result.json();
        const data = jsondata["values"][0].slice(1, 11);
        return data;
    })
}

//
// Call sheets API to get totals for each category for given year
//
export async function SHEETS_TOTALS(year) {

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!A3:K3?alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then(async (result) =>  {
        const jsondata = await result.json();
        const data = jsondata["values"][0].slice(1, 11);
        return data;
    })
}

//
// Call sheets API to get totals for each month in the year
//
export async function SHEETS_MONTH_TOTALS(year) {

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!I5:I16?majorDimension=COLUMNS&alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then(async (result) =>  {
        const jsondata = await result.json();
        const data = jsondata["values"][0];
        return data;
    })
}

//
// Call sheets API to get savings for each month in the year
//
export async function SHEETS_MONTH_SAVINGS(year) {

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!K5:K16?majorDimension=COLUMNS&alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then(async (result) =>  {
        const jsondata = await result.json();
        const data = jsondata["values"][0];
        return data;
    })
}

//
// Call sheets API to get savings for each month in the year
//
export async function SHEETS_MONTH_BUDGET(year) {

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!J5:J16?majorDimension=COLUMNS&alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then(async (result) =>  {
        const jsondata = await result.json();
        const data = jsondata["values"][0];
        return data;
    })
}


//
// Call sheets API to get breakdown for given year and month
//
export async function SHEETS_MONTH(year, month) {

    month = parseInt(month) + 5

    const filter = "A" + month + ":K" + month;

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!" + filter + "?alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then(async (result) =>  {
        const jsondata = await result.json();
        const data = jsondata["values"][0].slice(1, 11);
        return data;
    })
};