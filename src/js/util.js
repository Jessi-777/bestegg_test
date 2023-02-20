import { exampleDate } from './test/utilspec-data.js';

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
  if (typeof n !== 'number') {
    throw new Error('use a number clown');
  }
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(i);
  }
  return sequence;
}

function rand(n) {
  return Math.trunc(Math.random() * n);
}

function makeFakeIdLetter() {
  const letters = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  return letters[rand(letters.length)];
}

/**
 * This function makes a fake id.
 * @returns { string } returns a fake id.
 */

function makeFakeId() {
  return seq(24).map(makeFakeIdLetter).join('');
}

/**
 * This function makes a fake record.
 * @returns { object } returns empty object.
 */

function makeFakeRecord(id) {
  return { index: id, _id: makeFakeId(), balance: "$3,624.10", registered: 0};
}

/**
 * This function makes fake record sets of length `count`.
 * @param { number } count setting length of the fake record set.
 * @returns { number[] } returns a fake record set.
 */

function makeFakeRecordSet(count) {
  const indices = seq(count);
  return indices.map((i) => makeFakeRecord(i));
}

function fixBalance(balanceString) {
    return Number(balanceString.replace(/[^\d\.-]/g, ''));
}

function clone(record) {
    return record;
}

function fixDate(dateString) {
   
    return new Date(dateString);
}

function parseRecord(record) {
    const newRecord = clone(record);
   
    newRecord.balance = fixBalance(newRecord.balance);
    newRecord.registered = fixDate(newRecord.registered);
    return newRecord;
}

function parseRecordSet(recordSet) {
    return recordSet.map(parseRecord);
}

function filterRecord(record) {
    return record.isActive && (record.balance > 2000);
}

function filterRecordSet(recordSet) {
  
    return recordSet.filter(filterRecord);
}






export {
  seq,
  makeFakeRecord,
  makeFakeRecordSet,
  makeFakeId,
  makeFakeIdLetter,
  rand,
  parseRecord,
  parseRecordSet,
  clone,
  fixBalance,
  filterRecordSet,

};
