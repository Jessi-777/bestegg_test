/**
 * This function creates squence of numbers.
 * 
 * ```javascript
 * seq(4);  // [0,1,2,3]
 * seq(6);  // [0,1,2,3,4,5]
 * seq(0);  // [] 
 * ```
 * 
 * @param { number } n is the length of the sequence.
 * @returns { number[] } returns an array of 0 to n-1. 
 */


function seq(n) {
  if(typeof n !== 'number') {
    throw new Error('use a number clown');
  }  
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(i);
  }
  return sequence;
}



function makeFakeRecord() {
    return {};
}


function makeFakeRecordSet(count) {
    const indices = seq(count);
    return indices.map(makeFakeRecord);

}

export { seq, makeFakeRecord,makeFakeRecordSet };