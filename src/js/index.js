import { getFileRecords } from './record';

const callBack = (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err);
    return;
  }

  console.log('File data:', jsonString);
};

function double(x) {
  return x * 2;
}
export { double, callBack, getFileRecords };








