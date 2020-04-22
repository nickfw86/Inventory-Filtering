//NEXT STEPS
// 1. have npm start run the index file and drive upload. May need to use asyn code to have drive Upload wait on index to finish.
// 2.




//before running this. Download the csv report of all Vertx inventory. 
// Save in the Vertx-Inventory directory
// Run [$ csvtojson "csv_file_path" > inventory.json recommend deleteing previous inventory.json before running csvtojson
// node index
//move available_inventory.csv to https://drive.google.com/drive/folders/1-NBSKG91ZPvN7I6e-kmJC1HKTXsbiPus

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
writeCsv(vertxProd);

