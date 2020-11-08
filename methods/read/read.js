const fs = require("fs");

const flagsFilePath = "./methods/read/flags.txt";
const fileSize = getFileSize(flagsFilePath);
const buf = Buffer.alloc(fileSize);

fs.open(flagsFilePath, "r+", openCallback);

function openCallback(err, fd) {
  if (err) {
    logError(err);
  } else {
    // Perfom Read and Write.
    fs.read(fd, buf, 0, fileSize, 0, (err, bytesRead, buffer) => {
      if (err) {
        logError(err);
      } else {
        console.log(`bytes: ${bytesRead}`);
        console.log(`buffer: ${buffer.toString()}`);
      }
    });

    closeFile(fd);
  }
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

function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch (err) {
    logError(err);
  }
}
