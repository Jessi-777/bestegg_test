import { getFileRecords } from '../record';

describe('testingGetFileRecords', () => {
  test('goodread', async () => {
   
    const result = await getFileRecords(
      './src/js/records1.json',
    
    );
    expect(result.length).toBe(138411);
  });

  test('badread', async () => {
   
    const result = await getFileRecords(
      '../recordsdoesnotexist.json',
     
    );
    expect(result).toBe(false);
  });
});
