/*
defaults: {
    flags: "r",
    enconding: null,
    fd: null,
    mode: 0o666,
    autoClose: true
}
*/

const fs = require("fs");
const filePath = "./methods/createReadStream/file.json";

const readStream = fs.createReadStream(filePath, {
  encoding: "utf8",
});

readStream.on("data", (data) => {
  if (data.indexOf("buffer") === -1) {
    console.log(data.toUpperCase());
  } else {
    console.log(data.toString());
  }
});
