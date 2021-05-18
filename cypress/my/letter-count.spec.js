import {expect} from "chai";
import {getLetterCount} from '../../src/letter-count';

describe('getLetterCount - basic functionality',()=>{
    it('returns an empty object when passed an empty string ', ()=> {
        const expected={};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    });
    it('return the correct letter count', ()=> {
        const expected = {c:1,a:1,t:1}
        const actual = getLetterCount('cat')
        expect(actual).to.deep.equal(expected)
    });

    it('return the correct count for words have more than certain word',  ()=> {
        const expected = {m:1,i:4,s:4,p:2}
        const actual = getLetterCount('mississippi')
        expect(actual).to.deep.equal(expected)
    });
})