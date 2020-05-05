//NEXT STEPS
// 1. have npm start run the index file and drive upload. May need to use asyn code to have drive Upload wait on index to finish.
// 2. Put the item, color, and size values of the Vertx Prod into their respective skus and write that to the csv so it does not have to be concatenated in sheets.




//before running this. Download the csv report of all Vertx inventory. 
//  rm Available_Inventory.csv inventory.csv inventory.json
//  mv /Users/nickwatson/Downloads/Inventory.csv /Users/nickwatson/dev/Vertex-Inventory/Inventory.csv 
//  csvtojson /Users/nickwatson/dev/Vertex-Inventory/Inventory.csv > inventory.json
// node index
//node drive
//move available_inventory.csv to https://drive.google.com/drive/folders/1-NBSKG91ZPvN7I6e-kmJC1HKTXsbiPus
const colorMap = require('./colorMap')
const productIds = require('./productIdsList');
const fs = require('fs');
let writeCsv = require('./createCsv')
let data = fs.readFileSync('./inventory.json');
let inventory = JSON.parse(data);

let vertxProd =[];

for (let i =0; i < inventory.length; i++){
if (productIds.indexOf(inventory[i].Itemid) > -1 ){
    vertxProd.push(inventory[i]);
}
}
for (let i = 0; i < vertxProd.length; i++){
vertxProd[i].Color = colorMap[vertxProd[i].Color];
}
writeCsv(vertxProd);

