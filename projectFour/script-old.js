let sheetID = "1BrindtQ8AOFVsbQWs8wH3W0S814nRVrnJRSnytv4ct0";
let tabName = 'Sheet1'

let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`

let dataArr = [];
let lushname = ["Outback Mate","Karma","Sleepy","Honey I washed the kids","Christmas Cranberry","Bohemian","Sandstone","Sea Vegetable","Baked Alaska","Snow Fairy","Lemon Zest","Golden Pear","Ro's Argan","Olive Tree","Goddess",""]

let soapNameInput = document.getElementById("soapName")

//pulldown list


console.log(opensheet_url);

let mylist = document.getElementById("myList");  


function submit () {

// let soapName = soapNameInput.value;
let soapNameDown = mylist.options[mylist.selectedIndex].text;  
console.log(soapNameDown);

fetch(opensheet_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let datapoint of data) {
        let sweetness = parseFloat(datapoint.Sweetness);
        let items = datapoint.Item;
        let refreshyness = parseFloat(datapoint.Refreshness);
        let backgroundColor = datapoint.Background_color;
        let flowerColor = datapoint.Flower_color;
        
        dataArr.push([items,sweetness])
        for (let i = 0; i < lushname.length; i++) {
            // if(item[itemNum] == lushname[itemNum]) {
        if(soapNameDown == items) {
        count = map(sweetness,1,10,10,60);
        refresh = map(refreshyness,10,1,10,100);
        c1 = `#${flowerColor}`
        c2 = `#${backgroundColor}`;
        console.log(count);
				//do something with the data here
                // }
        } 
        // else {
        //     console.log("Oops,sorry! We don't have that.")
        // }
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
