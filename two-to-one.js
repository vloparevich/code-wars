function longest(s1, s2) {
    const lettersSortedArr = [...s1, ...s2].sort();
    lettersSortedArr.forEach(letter => {
        if (result[result.length - 1] !== letter) {
            result += letter;
        }
    });
    return result;
}