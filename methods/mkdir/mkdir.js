const fs = require("fs");

const dirName = "./methods/mkdir/asyncCreateDir";

fs.mkdir(dirName, (err) => {
  if (err) {
    logError(err);
  }

  const fileContent = "console.log('new file');";
  fs.writeFile(`${dirName}/file.js`, fileContent, (err) => {
    if (err) {
      logError(err);
    }
  });
});

function logError(err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
