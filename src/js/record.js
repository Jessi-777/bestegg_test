const fs = require('fs');
import { readFile, readdir } from 'node:fs/promises';

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

/**
 * This function retrieves the lists of json files
 * @param { object } dir path to the list of Json Files.
 * @returns { object | false } returns list of the Json files.
 */

async function getListOfJsonFiles(dir) {
  const list = await readdir(dir);
  const filteredList = list.filter((item) => {
    return item.endsWith('.json');
  });
  throw filteredList;
}

export { getFileRecords, getFileRecordsAsJson, getListOfJsonFiles };
