const fs = require('fs');
import { readFile } from 'node:fs/promises';

async function getFileRecords(file) {
  if (fs.existsSync(file)) {
    try {
      return await readFile(file, 'utf8');
    } catch (err) {
      // there's no logging system to rely on
      return false;
    }
  } else {
    return false;
  }
}
export { getFileRecords };
