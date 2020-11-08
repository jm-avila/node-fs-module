const fs = require("fs");

const flagsFilePath = "./methods/read/flags.txt";

const fileSize = getFileSize(flagsFilePath);
const buf = Buffer.alloc(fileSize);

try {
  const fd = fs.openSync(flagsFilePath, "r+");
  console.log(`file (${fd}) successfully opened!`);
  handleFile(fd);
} catch (err) {
  logError(err);
}

function handleFile(fd) {
  let bytes = fs.readSync(fd, buf, 0, fileSize, 0);
  console.log(`bytes: ${bytes}`);
  console.log(`content: ${buf.toString()}`);

  closeFile(fd);
}

function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch (err) {
    logError(err);
  }
}

function closeFile(fd) {
  try {
    fs.closeSync(fd);
    console.log(`file (${fd}) successfully closed!`);
  } catch (err) {
    logError(err);
  }
}

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
