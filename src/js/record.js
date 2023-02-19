const fs = require('fs');
import { readFile, readdir, writeFile } from 'node:fs/promises';

/**
 * This function reads files.
 * @param { string } file path to the file.
 * @returns { string | false } returns contents of the file,
 * or false when the file doesn't exist.
 */

async function getFileRecords(file) {
  if (fs.existsSync(file)) {
    try {
      return await readFile(file, 'utf8');
    } catch (err) {
      // there's no logging system to rely on
      /* istanbul ignore next */
      return false;
    }
  } else {
    return false;
  }
}

/**
 * This function retrieves files.
 * @param { string } file path to the file.
 * @returns { object | false } returns contents of the file as JSON
 * or false when the file doesn't exist.
 */

async function getFileRecordsAsJson(file) {
  return JSON.parse(await getFileRecords(file));
}

/**
 * This function retrieves the lists of json files.
 * @param { string } dir path to the list of Json Files.
 * @returns { array | false } returns list of the Json files
 * or false when the directory doesn't exist.
 */

async function getListOfJsonFiles(dir) {
  try {
    const list = await readdir(dir);
    const filteredList = list.filter((item) => {
      return item.endsWith('.json');
    });

    return filteredList;
  } catch (err) {
    // there is no logging system to rely on
    return false;
  }
}

/**
 * This function retrieves the json from files in dir.
 * @param { string } dir path to the dir of Json Files.
 * @returns { array | false } returns an array of the Json files'
 * contents or false when the directory doesn't exist.
 * fixed list of files in dir to secure dir path.
 */

async function getJsonContentsFromDir(dir) {
  const listOfFilesInDir = await getListOfJsonFiles(dir);
  if (listOfFilesInDir === false) {
    return false;
  }
  const fixedListOfFilesInDir = listOfFilesInDir.map(
    (fname) => `${dir}${fname}`
  );

  return (
    await Promise.all(fixedListOfFilesInDir.map(getFileRecordsAsJson))
  ).flat();
}

/**
 * This module function writes files.
 * @param { string } files path to the file.
 * @returns { string | false } writes contents of the file
 * or false when the file doesn't write.
 */

async function writeFileRecords(file, records) {
  if (!(fs.existsSync(file))) {
    try {
      return await writeFile(file, JSON.stringify(records, undefined, 2));
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}



export {
  getFileRecords,
  getFileRecordsAsJson,
  getListOfJsonFiles,
  getJsonContentsFromDir,
  writeFileRecords,
};
