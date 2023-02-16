import { getFileRecords } from '../record';

const goodread_mock = jest.fn((anything) => console.log(anything));

describe('testingGetFileRecords', () => {
  test('goodread', () => {
    // expect(() => getFileRecords('../records1.json', undefined)).not.toBe(null);
    getFileRecords('../records1.json', goodread_mock);
    expect(goodread_mock.toHaveBeenCalled()).toBe(true);
  });

  //   test('goodread', () => {});

  //   test('goodread', () => {});
});

// test('goodread', () => {});

//   test('goodread', () => {});
