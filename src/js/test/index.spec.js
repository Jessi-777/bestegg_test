import { double, callBack } from '../index.js';
import { getFileRecords } from '../record';

describe('Double works as expected!', () => {
  test('2 * 2 = 4', () => {
    expect(double(2)).toBe(4);
  });
});
