const FS = require('fs');
const Util = require('util');

const writeFilePromise = Util.promisify(FS.writeFile);

// function writeFilePromise(path, content) {
//   const promise = new Promise((resolve, reject) => {
//     FS.writeFile(path, content, (error) => {
//       if (error) {
//         // Failure
//         reject(error)
//       } else {
//         // Success
//         resolve()
//       }
//     })
//   })
//   return promise
// };

function writeTimestamp(filePath) {
  const date = new Date();
  const timestamp = date.toISOString();
  const bigData = Buffer.alloc(1024 * 1024 * 100);
  console.time('3-promise call');
  console.time('3-promise write');
  writeFilePromise(filePath, bigData)
  .then(() => {
    // When the file was completely written
    console.timeEnd('3-promise write');
  });
  console.timeEnd('3-promise call');
}

module.exports = {
  writeTimestamp
}

