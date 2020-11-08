const fs = require("fs");

const flagsFilePath = "./methods/open/flags.txt";

fs.open(flagsFilePath, "r+", openCallback);

function openCallback(err, fd) {
  if (err) {
    logError(err);
  } else {
    // Perfom Read and Write.
    console.log(`file (${fd}) successfully opened!`);

    fs.close(fd, closeCallback);
  }
}

function closeCallback(err) {
  if (err) {
    logError(err);
  } else {
    console.log(`Successfully closed!`);
  }
}

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
