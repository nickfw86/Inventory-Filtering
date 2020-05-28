//NEXT STEPS
//combine set up, current index, and drive into one file that executes this program.




//before running this. Download the csv report of all Vertx inventory. 
// node setup 
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

