function unique(arg) {
    var result = [];
    var obj = [];
    for (var i = 0; i < arg.length; i++) {
        obj[arg[i]] = arg[i];
    }
    for (var i in obj) {
        result.push(obj[i]);
    }
    return result;
}
console.log(unique([2,3,4,5,22,4,2,7,8,3,1,2,'nan','nen','nan']))
