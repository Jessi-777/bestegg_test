const fs = require('fs');

function getFileRecords(file, cb) {
  fs.readFile(file, 'utf8', cb);
}

export { getFileRecords };
