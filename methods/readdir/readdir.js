const fs = require("fs");

const dirPath = "./methods/readdir/dir";

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.log(`code: ${err.code}\nmessage: ${err.message}`);
  } else {
    console.log(`files: ${files}`);
  }
});
