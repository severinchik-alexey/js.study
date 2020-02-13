let arr = [0, 1, 1.5, 17, 9, 0.5];
function inRange(min, max, array) {
    return arr.filter(function (value) {
        if (value >= min && value <= max) {
            return value;
        }
    });
}
console.log(inRange(1, 10, arr));