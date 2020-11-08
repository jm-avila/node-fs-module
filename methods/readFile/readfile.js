const fs = require("fs");

const flagsFilePath = "./methods/readFile/flags.txt";

fs.readFile(flagsFilePath, "utf8", (err, data) => {
  if (err) {
    logError(err);
  } else {
    console.log(data);
  }
});

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
