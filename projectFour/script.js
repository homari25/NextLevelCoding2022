let sheetID = "1BrindtQ8AOFVsbQWs8wH3W0S814nRVrnJRSnytv4ct0";
let tabName = 'Sheet1'

let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`

let dataArr = [];
let lushname = ["Outback Mate","Karma","Sleepy","Honey I washed the kids","Christmas Cranberry","Bohemian","Sandstone","Sea Vegetable","Baked Alaska","Snow Fairy","Lemon Zest","Golden Pear","Ro's Argan","Olive Tree","Goddess",""]

let soapNameInput = document.getElementById("soapName")

//pulldown list

//position
let randomX, randomY;
let randomX2, randomY2;
let randomX3, randomY3;
let randomX4, randomY4;
let randomX5, randomY5;
let randomX6, randomY6;
let randomX7, randomY7;
let randomX8, randomY8;
let randomX9, randomY9;
let randomX10, randomY10;
let randomX11, randomY11;
let randomX12, randomY12;
let randomX13, randomY13;
let randomX14, randomY14;
let randomX15, randomY15;
let randomX16, randomY16;
let randomX17, randomY17;
let randomX18, randomY18;
let randomX19, randomY19;
let randomX20, randomY20;



// console.log(opensheet_url);

let mylist = document.getElementById("myList");  


function submit () {
// let soapName = soapNameInput.value;
let soapNameDown = mylist.options[mylist.selectedIndex].text;  
// console.log(soapNameDown);

randomX = 50;
randomY = random(100,windowHeight - 100);
randomX2 = 100;
randomY2 = random(100,windowHeight - 100 );
randomX3 = 150;
randomY3 = random(100,windowHeight - 100 );
randomX4 = 200;
randomY4 = random(100,windowHeight - 100 );
randomX5 = 250;
randomY5 = random(100,windowHeight - 100 );
randomX6 = 350;
randomY6 = random(100,windowHeight - 100 );
randomX7 = 450;
randomY7 = random(100,windowHeight - 100 );
randomX8 = 500;
randomY8 = random(100,windowHeight - 100 );
randomX9 = 550;
randomY9 = random(100,windowHeight - 100 );
randomX10 = 650;
randomY10 = random(100,windowHeight - 100 );
randomX11 = 550;
randomY11 = random(100,windowHeight - 100 );
randomX12 = 600;
randomY12 = random(100,windowHeight - 100 );
randomX13 = 750;
randomY13 = random(100,windowHeight - 100 );
randomX14 = 850;
randomY14 = random(100,windowHeight - 100 );
randomX15 = 950;
randomY15 = random(100,windowHeight - 100 );
randomX16 = 1000;
randomY16 = random(100,windowHeight - 100 );
randomX17 = 1075;
randomY17 = random(100,windowHeight - 100 );
randomX18 = 1150;
randomY18 = random(100,windowHeight - 100 );
randomX19 = 1275;
randomY19 = random(100,windowHeight - 100 );
randomX20 = 1300;
randomY20 = random(100,windowHeight - 100 );




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
        let middleColor = datapoint.Middleground_color;
        
        dataArr.push([items,sweetness])
        for (let i = 0; i < lushname.length; i++) {
            // if(item[itemNum] == lushname[itemNum]) {
        if(soapNameDown == items) {
        count = map(sweetness,1,10,20,30);
        refresh = map(refreshyness,10,1,3,10);
        softness = map(sweetness,1,10,2,10);
        c1 = `#${flowerColor}`
        c2 = `#${backgroundColor}`;
        c3 = `#${middleColor}`;

        // console.log(count);
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
