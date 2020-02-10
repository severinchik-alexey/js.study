function deepEqual(objA, objB) {
    let objAKeys = Object.keys(objA);
    let objBKeys = Object.keys(objB);

    if (objA === objB) {
        return true;
    }
    if (typeof(objA) !== 'object' || typeof(objB) !== 'object') {
        return false;
    }
    if (objAKeys.length !== objBKeys.length) {
        return false;
    }
    for (let key in objA) {
        if (!deepEqual(objA[key], objB[key])) {
            return false;
        }
    }
    return true;
}
console.log(deepEqual({a: 1}, {a: 1}))
