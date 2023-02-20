import { seq, makeFakeRecord, makeFakeRecordSet, filterRecordSet, parseRecordSet } from '../util.js'; 
import { exampleDate } from './utilspec-data.js';

describe('sequence', () => {
    test('seq(4)', () => {
        expect(seq(4)).toStrictEqual([0,1,2,3]);
    });

    test('seq(6)', () => {
        expect(seq(6)).toStrictEqual([0,1,2,3,4,5]);
    });

    test('seq(0)', () => {
        expect(seq(0)).toStrictEqual([]);
    });

    test('seq({}) should throw', () => {
        expect (() => seq({})).toThrow();
    });

}); 

describe('make fake record', () => {
    test('fake record is an object', () => {
        expect( typeof makeFakeRecord()).toBe('object'); 
    });
});

describe('make fake record set', () => {
    test('test the right count of records for 5', () => {
        expect(makeFakeRecordSet(5).length).toBe(5);
    });

    test('test the right count of records for 3', () => {
        expect(makeFakeRecordSet(3).length).toBe(3);
    });

    test('test index value', () => {
        const recordset = makeFakeRecordSet(3); 
        expect(recordset[0].index).toBe(0);
        expect(recordset[2].index).toBe(2);
    });
        
});

describe('make filtered record set', () => {
    test('test to filter through the records', () => {
        expect(filterRecordSet(parseRecordSet(exampleDate)).length).toStrictEqual(1); 

    });
});

