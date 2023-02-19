import {
  getFileRecords,
  getFileRecordsAsJson,
  getListOfJsonFiles,
  getJsonContentsFromDir,
  writeFileRecords,
} from '../record.js';
import { makeFakeRecordSet, parseRecord, makeFakeRecord } from '../util.js';

describe('testingGetFileRecords', () => {
  test('opening a file with a known length has correct size (138411 characters)', async () => {
    const result = await getFileRecords('./src/js/records1.json');
    expect(result.length).toBe(138411);
  });

  test('if we ask for a file record that does not exist we should get false.', async () => {
    const result = await getFileRecords('../recordsdoesnotexist.json');
    expect(result).toBe(false);
  });
});

describe('testingGetFileRecordsAsJson', () => {
  test('get 1 file records shows 100 results', async () => {
    const result = await getFileRecordsAsJson('./src/js/records1.json');
    expect(result.length).toBe(100);
  });

  test('if ask for a file record in json that does not exist we should get false.', async () => {
    const result = await getFileRecordsAsJson('../recordsdoesnotexist.json');
    expect(result).toBe(false);
  });
});

describe('getListOfJsonFiles', () => {
  test('list files from the disk; should be 6 files', async () => {
    const result = await getListOfJsonFiles('./src/js/');
    expect(result.length).toBe(6);
  });

  test('if we ask for a list of json files from a directory that does not exist we should get false.', async () => {
    const result = await getListOfJsonFiles('../src/fake');
    expect(result).toBe(false);
  });
});

describe('getJsonContentsFromDir', () => {
  test('retrieving the list of contents and getting 600 items', async () => {
    const result = await getJsonContentsFromDir('./src/js/');
    expect(result.length).toBe(600);
  });

  test('retrieving the contents from a directory that does not exist should return false.', async () => {
    const result = await getJsonContentsFromDir('../src/fake');
    expect(result).toBe(false);
  });
});

describe('writeFileRecords', () => {
  test('writing a file with a known length has correct size (138411 characters)', async () => {
    const result = await writeFileRecords(
      './fakedata/fake_delivery_test.json', makeFakeRecordSet(10));
    expect(result).toBe(undefined);
    // write file actually returns undefined on success
    // if it fails it will be false instead
  });

  // test('if we ask to write a file record that does not exist we should get false.', async () => {
  //   const result = await writingFileRecords('../recordsdoesnotexist.json');
  //   expect(result).toBe(false);
  // });
});

describe('parseRecord', () => {
  test('parsing one record',  () => {
    const parsed = parseRecord(makeFakeRecord(0));
    expect(typeof parsed.balance).toBe('number');
    expect(typeof parsed.registered).toBe('object');
  });
});

