// const array = [18, 2, 23, 6, 32, 10, 19];
// let max = maxV(array);
// function maxV(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) max = array[i];
//     }
//     return max;
// };
// alert(max);

const array = [18, 2, 23, 6, 32, 10, 19];
    let max = maxV(array);
function maxV(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if ((max - array[i]) < 0) {
            max = array[i];
        }
    }
    return max;
};
alert(max);

function maxV(...arguments) {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if ((max - arguments[i]) < 0) {
            max = arguments[i];
        }
    }
    return max;
};
console.log(maxV(18, 2, 23, 6, 32, 10, 19));
