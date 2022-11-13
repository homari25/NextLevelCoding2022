let sheetID = "1BrindtQ8AOFVsbQWs8wH3W0S814nRVrnJRSnytv4ct0";
let tabName = 'Sheet1'

let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`

let dataArr = [];
let lushname = ["Outback Mate","Karma","Sleepy","Honey I washed the kids","Christmas Cranberry","Bohemian","Sandstone","Sea Vegetable","Baked Alaska","Snow Fairy","Lemon Zest","Golden Pear","Ro's Argan","Olive Tree","Goddess",""]

console.log(opensheet_url);
fetch(opensheet_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let datapoint of data) {
        let sweetness = parseFloat(datapoint.Sweetness);
        let item = parseFloat(datapoint.Item);

        dataArr.push([item])
        for (let itemNum = 0; itemNum < lushname.length; itemNum++) {
            if(item[itemNum] == lushname[itemNum]) {
        count = map(sweetness[itemNum],1,10,10,40);
        console.log(count, sweetness[itemNum], lushname[itemNum]);
				//do something with the data here
                }
            }
            }
        })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}