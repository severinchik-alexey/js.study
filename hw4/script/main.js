function treeSum(arr) {
    let sum = 0;
    for (let value of arr) {
        if (typeof value === 'object') {
            sum += treeSum(value);
        } else {
            sum += value;
        }
    }
    return sum;
}
console.log(treeSum([ 5, 7, 
        [ 4, [2], 8, [1,3], 2 ], 
        [ 9, [] ], 
        1, 8
      ]));
