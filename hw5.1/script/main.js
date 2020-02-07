deepEqual = function (a, b) {
    for (let p in a) {
        if (p) {
            if (a[p] !== b[p]) {
                return false;
            }
        }
    }
    for (let p in b) {
        if (p) {
            if (a[p] !== b[p]) {
                return false;
            }
        }
    }
    return true;
};
console.log(deepEqual({a: 9, b: 7}, {a: 9, b: 7}));