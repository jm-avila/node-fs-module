const fs = require("fs");

const flagsFilePath = "./methods/open/flags.txt";

try {
  const fd = fs.openSync(flagsFilePath, "r+");
  handleFile(fd);
} catch (err) {
  logError(err);
}

function handleFile(fd) {
  // Perfom Read and Write.
  console.log(`file (${fd}) successfully opened!`);

  try {
    fs.closeSync(fd);
    console.log(`Successfully closed!`);
  } catch (err) {
    logError(err);
  }
}

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
