const { exec } = require("child_process");

exec("mv /Users/nickwatson/Downloads/Inventory.csv /Users/nickwatson/dev/Vertex-Inventory/Inventory.csv ", (error, stdout, stderr) => {
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