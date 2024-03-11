function countVowels(str){
    let count = 0;
    for(const char of str) {
        if(char === "a" || char ==="e" || char ==="i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

// using arroyfunction

const countVow = (str) => {
    let count = 0;
    for(const char of str) {
        if(char === "a" || char ==="e" || char ==="i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}