import {expect} from "chai";
import {isAnagram} from "../../src/anagrams";

describe('isAnagram - basic functionality', ()=>{
    it('return true when two known anagram', ()=> {
        const expected = true
        const actual = isAnagram('listen','silent')
        expect(actual).to.equal(expected)
    });

    it('return false when either of the strings has extra letter', ()=> {
        const expected = false
        const actual = isAnagram('below','elbows')
        expect(actual).to.equal(expected)

        const actual2 = isAnagram('elbows','below')
        expect(actual2).to.equal(expected)
    });

    it('return false when the strings have the same letters but not equal length of strings', ()=> {
        const expected = false
        const actual = isAnagram('listens','silent')
        expect(actual).to.equal(expected)
    });
})