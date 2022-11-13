let sheetID = "1BrindtQ8AOFVsbQWs8wH3W0S814nRVrnJRSnytv4ct0";
let tabName = 'Sheet1'

let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`


console.log(opensheet_url);
fetch(opensheet_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
				//do something with the data here
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}