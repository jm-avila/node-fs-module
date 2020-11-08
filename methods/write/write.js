const fs = require("fs");

const flagsFilePath = "./methods/write/flags.txt";
const str = "\nHello Friend";

fs.open(flagsFilePath, "a", openCallback);

function openCallback(err, fd) {
  if (err) {
    logError(err);
  } else {
    writeStr(fd);
  }
}

function writeStr(fd) {
  fs.write(fd, str, (err, written, string) => {
    if (err) {
      logError(err);
    } else {
      console.log(`${written} bytes written.`);
      console.log(`${string} was written.`);
      closeFile(fd);
    }
  });
}

function closeFile(fd) {
  fs.close(fd, (err) => {
    if (err) {
      logError(err);
    } else {
      console.log(`Successfully closed!`);
    }
  });
}

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
