function squareDigits(num) {
    const sqArray = (num + '').split('').map((strNum) => {
        const number = Number(strNum);
        return Math.pow(number, 2);
    });
    return sqArray.join('');
}