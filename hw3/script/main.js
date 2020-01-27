// let array = [18, 2, 23, 6, 32, 10, 19];
// let max = maxV(array);
// alert(max);
// function maxV(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) max = array[i];
//     }
//     return max;
// };
// console.log(maxV(array));

let array = [18, 2, 23, 6, 32, 10, 19],
    max = maxV(array);
function maxV(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if ((max - array[i]) < 0) max = array[i];
    }
    return max;
};
console.log(maxV(array));
alert(max);