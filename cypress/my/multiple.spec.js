import {expect} from "chai";
import {multipleFunction} from "../../src/multiple"

describe('multiple numbers', ()=>{
    it('should multiple two numbers',  ()=> {
        const expected = 12
        const actual = multipleFunction(3,4)
        expect(actual).to.equal(expected)
    });
})