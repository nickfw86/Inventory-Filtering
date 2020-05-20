const { exec } = require("child_process");
let commands = ["rm Available_Inventory.csv inventory.csv inventory.json",
"mv /Users/nickwatson/Downloads/Inventory.csv /Users/nickwatson/dev/Vertex-Inventory/Inventory.csv ",
"csvtojson /Users/nickwatson/dev/Vertex-Inventory/Inventory.csv > inventory.json" ];

for (let i = 0; i < commands.length; i++){
exec(commands[i], (error, stdout, stderr) => {
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
}