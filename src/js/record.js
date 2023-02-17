const fs = require('fs');
import { readFile } from 'node:fs/promises';

/**
 * This function retrieves files
 * @param { string } file path to the file.
 * @returns { string | false } returns contents of the file.
 */

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

/**
 * This function retrieves files
 * @param { string } file path to the file.
 * @returns { object | false } returns contents of the file as JSON.
 */
async function getFileRecordsAsJson(file) {
  return JSON.parse(await getFileRecords(file));
}


export { getFileRecords, getFileRecordsAsJson };


