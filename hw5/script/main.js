function unique(arg) {
    var result = [];
    var b = [];
    for (var i = 0; i < arg.length; i++) {
        b[arg[i]] = arg[i];
    }
    for (var i in b) {
        result.push(b[i]);
    }
    return result;
}
console.log(unique([2,3,4,5,22,4,2,7,8,3,1,2,'nan','nen','nan']))
