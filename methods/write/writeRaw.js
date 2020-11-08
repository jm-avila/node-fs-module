const fs = require("fs");

const flagsFilePath = "./methods/write/raw.txt";
const data = "OFFSET./methods/write/raw.txt";
const buf = Buffer.from(data, "utf8");
const offset = 6;

try {
  const fd = fs.openSync(flagsFilePath, "a"); // a flag = append data to the file
  console.log(`file (${fd}) successfully opened!`);

  let bytes = fs.writeSync(fd, buf, offset, buf.byteLength - offset, 0);
  console.log(`${bytes} bytes written.`);

  fs.closeSync(fd);
  console.log(`file (${fd}) successfully closed!`);
} catch (err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
