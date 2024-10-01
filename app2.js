function getTotal(number) {
    return number.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(getTotal([1, 8, 6, 4]));
