function treeSum(arr) {
    let sum = 0;
    for (let value of arr) {
        if (isNaN(value)) {
            sum += treeSum(value);
        } else {
            sum += value;
        }
    }
    return sum;
}
console.log(treeSum([5, 2, [1, 4, [5, [4, [5, 8, 9], 7], 11], 7], 8, [9, 10]]));