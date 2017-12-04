const FS = require('fs');

function writeTimestamp(filePath) {
  const date = new Date();
  const timestamp = date.toISOString();
  const bigData = Buffer.alloc(1024 * 1024 * 100);
  console.time('1-async call');
  console.time('1-async write');
  FS.writeFile(filePath, bigData, (error) => {
    // When the file was completely written
    console.timeEnd('1-async write');
  });
  console.timeEnd('1-async call');
}

module.exports = {
  writeTimestamp
}

