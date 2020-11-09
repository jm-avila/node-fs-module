const fs = require("fs");

const dirName = "./methods/mkdir/syncCreateDir";

try {
  fs.mkdirSync(dirName);

  const fileContent = "console.log('new file');";
  fs.writeFileSync(`${dirName}/file.js`, fileContent);
} catch (err) {
  console.log(`code: ${err.code}\nmessage: ${err.message}`);
}
