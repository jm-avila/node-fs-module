const fs = require("fs");
const readFilePath = "./methods/createWriteStream/file.txt";
const writeFilePath = "./methods/createWriteStream/file3.txt";

const readStream = fs.createReadStream(readFilePath);
const writeStream = fs.createWriteStream(writeFilePath);

readStream.pipe(writeStream);
