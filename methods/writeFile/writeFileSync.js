const fs = require("fs");

const flagsFilePath = "./methods/writeFile/flags.txt";
const str = "\nNot Found";

try {
  fs.writeFileSync(flagsFilePath, str, { flag: "a" });
} catch (err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
