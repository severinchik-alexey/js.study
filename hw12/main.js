let arr = [0, 1, 1.5, 17, 9, 0.5];
function inRange(value) {
    return value >= 1 && value <= 10;
}
var filtered = arr.filter(inRange);
console.log(filtered);    