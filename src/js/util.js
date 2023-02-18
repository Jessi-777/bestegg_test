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
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(i);
  }
  return sequence;
}
export { seq };
