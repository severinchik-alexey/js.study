/*var equation = (a, b, c) => {
    var d = (Math.pow(b,2)) - (4*a*c);
    if (d < 0) {
        alert(`Корней нет`);
        return undefined;
    } else if (d == 0) {
        var x = (-b / (2 * a));
        alert(`x равен ${x}`);
        return x;
    } else if (d > 0) {
        var x1 = ((-b + Math.sqrt(d)) / (2 * a));
        var x2 = ((-b - Math.sqrt(d)) / (2 * a));
        alert(`x1 равен ${x1} x2 равен ${x2}`);
        return x1, x2;
    }
};
alert(equation(1,-6,9));*/



let a = prompt('Введите a');
let b = prompt('Введите b');
let c = prompt('Введите c');
function solveEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    let x;
    if (d < 0) {
        alert('Корней нет');
        return undefined;
    } else if (d === 0) {
        x = (-b / (2 * a));
        alert(`x равен ${x}`);
        return x;
    } else if (d > 0) {
        let x1 = ((-b + d ** 0.5) / (2 * a));
        let x2 = ((-b - d ** 0.5) / (2 * a));
        alert(`x1 = ${ x1 } \nx2 = ${ x2 }`);
        return x1, x2;
    }
}
console.Log(solveEquation(a, b, c));