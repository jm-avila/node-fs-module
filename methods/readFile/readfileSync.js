const fs = require("fs");

const flagsFilePath = "./methods/readFile/flags.txt";

try {
  const data = fs.readFileSync(flagsFilePath, "utf8");
  console.log(data);
} catch (err) {
  logError(err);
}

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
