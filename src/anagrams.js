import {isEqual} from 'lodash';
import {getLetterCount} from "./letter-count";

export const isAnagram = (string1,string2)=>{
    const string1LettersCount = getLetterCount(string1)
    const string2LettersCount = getLetterCount(string2)

    return isEqual(string1LettersCount,string2LettersCount)
}