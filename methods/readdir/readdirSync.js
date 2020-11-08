const fs = require("fs");

const dirPath = "./methods/readdir/dir";
let files = fs.readdirSync(dirPath);

console.log(`files: ${files}`);
