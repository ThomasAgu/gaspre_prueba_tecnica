function hasUniqueChars(str) {
    const searchedChars = []
    for (let i = 0; i < str.length; i++){
        const char = str[i];

        if (searchedChars[char]) {
            return false
        }
        searchedChars[char] = true;
    }
    return true
}

console.log(hasUniqueChars('jirwhoqw')) //eq false
console.log(hasUniqueChars('rhjw')) //eq true