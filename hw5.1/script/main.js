deepEqual = function (a, b) {
    for (let i in a) {
        if (i) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
    }
    for (let i in b) {
        if (i) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
    }
    return true;
};
console.log(deepEqual({a: 9, b: 7}, {a: 9, b: 7}));
