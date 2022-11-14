let sheetID = "1BrindtQ8AOFVsbQWs8wH3W0S814nRVrnJRSnytv4ct0";
let tabName = 'Sheet1'

let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`

let dataArr = [];
let lushname = ["Outback Mate","Karma","Sleepy","Honey I washed the kids","Christmas Cranberry","Bohemian","Sandstone","Sea Vegetable","Baked Alaska","Snow Fairy","Lemon Zest","Golden Pear","Ro's Argan","Olive Tree","Goddess",""]

let soapNameInput = document.getElementById("soapName")


console.log(opensheet_url);

function submit () {

let soapName = soapNameInput.value;
fetch(opensheet_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let datapoint of data) {
        let sweetness = parseFloat(datapoint.Sweetness);
        let items = parseFloat(datapoint.Item);
        
        // dataArr.push([items])
        for (let i = 0; i < lushname.length; i++) {
            // if(item[itemNum] == lushname[itemNum]) {
        if(soapNameInput.value == datapoint.Item) {
        console.log(data);
				//do something with the data here
                // }
            }
        }
        }
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
}

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}