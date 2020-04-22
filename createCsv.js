const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './Available_Inventory.csv',
    header: [
        {id: 'Itemid', title: 'Item_ID'},
        {id: 'Color', title: 'Color'},
        {id: 'Inventsizeid', title: 'Size'},
        {id: 'Available', title: 'Inventory_Available'}
    ]
});

let writeCsv = (arr) =>{

csvWriter.writeRecords(arr)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
}
module.exports = writeCsv;