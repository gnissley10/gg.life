

export async function averages(year) {

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!A2:K2?alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then((result) =>  {
        const data = result.json();
        return data;
    })
}

export async function totals(year) {

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!A3:K3?alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then((result) =>  {
        const data = result.json();
        return data;
    })
}

export async function month(year, month) {

    month = parseInt(month) + 4

    const filter = "A" + month + ":K" + month;

    return fetch("https://sheets.googleapis.com/v4/spreadsheets/1smB7_V2_Syd0RyGHKY7eSggtcb661tahx8ZRS2tY3Iw/values/" + year + "!" + filter + "?alt=json&key=AIzaSyCoaGUvi-Tc54Jt5u1x8y_xuDJyWj3ZaWk")
    .then((result) =>  {
        const data = result.json();
        return data;
    })
};