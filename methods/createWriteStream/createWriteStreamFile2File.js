/*
defaults: {
    flags: "w",
    enconding: "utf8",
    fd: null,
    mode: 0o666,
    autoClose: true
}
*/

const fs = require("fs");
const readFilePath = "./methods/createWriteStream/file.txt";
const writeFilePath = "./methods/createWriteStream/file2.txt";

const readStream = fs.createReadStream(readFilePath);
const writeStream = fs.createWriteStream(writeFilePath);

readStream.on("data", (data) => {
  writeStream.write(data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Data Written");
    }
  });
});
