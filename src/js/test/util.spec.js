import { seq, makeFakeRecord } from '../util.js'; 

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
        expect( typeof makeFakeRecord() === 'object'); 
    });
});