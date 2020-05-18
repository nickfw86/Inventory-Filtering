const { exec } = require("child_process");

exec("csvtojson /Users/nickwatson/dev/Vertex-Inventory/Inventory.csv > inventory.json", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});