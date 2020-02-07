function unique(arr) {
        let b = {};
        for (let i = 0; i < arr.length; i++) {
            b[arr[i]] = arr[i];
        }

        return Object.keys(b);
    };
console.log(unique([2,3,4,5,22,4,2,7,8,3,1,2,'nan','nen','nan']));
