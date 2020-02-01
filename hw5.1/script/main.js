function objectsAreEqual(a, b) {
    for (let i in a) {
        if (a.hasOwnProperty(i)) {
            if (b.hasOwnProperty(i)) {
                if (typeof a[i] === 'object') {
                    if (!objectsAreEqual(a[i], b[i])) return false;
                } else {
                    if (a[i] !== b[i]) return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
}
console.log(objectsAreEqual({ a: 7 }, { b: 9 }));
