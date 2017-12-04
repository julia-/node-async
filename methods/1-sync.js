const FS = require('fs');

function writeTimestamp(filePath) {
  const date = new Date();
  const timestamp = date.toISOString();
  const bigData = Buffer.alloc(1024 * 1024 * 100)
  console.time('1-sync call');
  console.time('1-sync write');
  FS.writeFileSync(filePath, bigData);
  console.timeEnd('1-sync call');
  console.timeEnd('1-sync write');
}

module.exports = {
  writeTimestamp
}