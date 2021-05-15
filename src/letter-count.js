export const getLetterCount = string => {
    const letters = string.split('');
    console.log(letters)
    let letterCount = {};
    letters.forEach(letter => {
        if (!letterCount[letter]) {
            letterCount[letter] = 1;
        } else {
            letterCount[letter] += 1;
        }
    })

    return letterCount;
};