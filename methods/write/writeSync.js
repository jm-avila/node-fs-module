const fs = require("fs");

const flagsFilePath = "./methods/write/flags.txt";
const str = "\nNot Found";
try {
  const fd = fs.openSync(flagsFilePath, "a"); // a flag = append data to the file
  console.log(`file (${fd}) successfully opened!`);
  let bytes = fs.writeSync(fd, str);
  console.log(`${bytes} bytes written.`);
  fs.closeSync(fd);
  console.log(`file (${fd}) successfully closed!`);
} catch (err) {
  logError(err);
}

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
