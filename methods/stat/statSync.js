const fs = require("fs");

const flagsFilePath = "./methods/stat/flags.txt";

try {
  const stat = fs.statSync(flagsFilePath);
  console.dir(stat, { color: true });
  // Properties
  console.log(`Size: ${stat.size} bytes.`);
  console.log(`User Id: ${stat.uid}.`);
  console.log(`Group Id: ${stat.gid}.`);
  console.log(`Mode: ${stat.mode}.`);
  console.log(`Last Access Time: ${stat.atime}.`);
  console.log(`Last Modified Time: ${stat.mtime}.`);
  console.log(`Last Change Time: ${stat.ctime}.`);
  console.log(`Creation Time: ${stat.birthtime}.`);
  // Methods
  console.log(`Is a Directory: ${stat.isDirectory()}.`);
  console.log(`Is a FIFO: ${stat.isFIFO()}.`);
  console.log(`Is a File: ${stat.isFile()}.`);
  console.log(`Is a Sokcer: ${stat.isSocket()}.`);
  console.log(`Is a Symbolic Link: ${stat.isSymbolicLink()}.`);
} catch (err) {
  logError(err);
}

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
