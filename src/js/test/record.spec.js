import {
  getFileRecords,
  getFileRecordsAsJson,
  getListOfJsonFiles,
  getJsonContentsFromDir,
} from '../record';

describe('testingGetFileRecords', () => {
  test('goodread', async () => {
    const result = await getFileRecords('./src/js/records1.json');
    expect(result.length).toBe(138411);
  });

  test('badread', async () => {
    const result = await getFileRecords('../recordsdoesnotexist.json');
    expect(result).toBe(false);
  });
});

describe('testingGetFileRecordsAsJson', () => {
  test('goodread', async () => {
    const result = await getFileRecordsAsJson('./src/js/records1.json');
    expect(result.length).toBe(100);
  });

  test('badread', async () => {
    const result = await getFileRecordsAsJson('../recordsdoesnotexist.json');
    expect(result).toBe(false);
  });
});

describe('getListOfJsonFiles', () => {
  test('goodread', async () => {
    const result = await getListOfJsonFiles('./src/js/');
    expect(result.length).toBe(6);
  });

  test('badread', async () => {
    const result = await getListOfJsonFiles('../src/fake');
    expect(result).toBe(false);
  });
});

describe('getJsonContentsFromDir', () => {
  test('goodread', async () => {
    const result = await getJsonContentsFromDir('./src/js/');
    expect(result.length).toBe(600);
  });

  test('badread', async () => {
    const result = await getJsonContentsFromDir('../src/fake');
    expect(result).toBe(false);
  });
});