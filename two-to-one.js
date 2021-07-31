function longest(s1, s2) {
    const lettersSortedArr = [...s1, ...s2].sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1
        }
    });
}