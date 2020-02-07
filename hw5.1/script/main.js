deepEqual = function (a, b) {
    for (var p in a) {
        if (a.hasOwnProperty(p)) {
            if (a[p] !== b[p]) {
                return false;
            }
        }
    }
    for (var p in b) {
        if (b.hasOwnProperty(p)) {
            if (a[p] !== b[p]) {
                return false;
            }
        }
    }
    return true;
};
console.log(deepEqual({ a: 9 }, {}));