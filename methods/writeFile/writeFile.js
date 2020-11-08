const fs = require("fs");

const flagsFilePath = "./methods/writeFile/flags.txt";
const str = "\nHello Buffer";
const buf = Buffer.from(str, "utf8");

fs.writeFile(flagsFilePath, buf, { flag: "a" }, (err) => {
  if (err) {
    console.log(`code: ${err.code}\nmessage: ${err.message}`);
  }
});
