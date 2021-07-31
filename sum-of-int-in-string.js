function sumOfIntegersInString(s) {
    const numbers = [];
    let temp = "";
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            temp += s[i];
            continue;
        }
        if (temp) {
            numbers.push(temp);
        }
        temp = "";
    }
    if (temp) numbers.push(temp);

    return numbers.reduce((acc, currentItem) => {
        return acc += Number(currentItem);
    }, 0);
}