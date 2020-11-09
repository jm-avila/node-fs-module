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
const filePath = "./methods/createWriteStream/file.txt";
const data = "What is always in front of you but can’t be seen? The future";

const writeStream = fs.createWriteStream(filePath);

writeStream.write(data, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Data Written");
  }
});
