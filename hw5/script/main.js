function unique(arr) {
    let result = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        b[arr[i]] = arr[i];
    }
    for (let i in b) {
        result.push(b[i]);
    }
    return result;
}
console.log(unique([2,3,4,5,22,4,2,7,8,3,1,2,'nan','nen','nan']))
