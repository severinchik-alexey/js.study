let a = prompt('Введите a');
let b = prompt('Введите b');
let c = prompt('Введите c');
let d = (b * b) - (4 * a * c);
// const disk = () => console.log(-b / (2 * a)); 
function solveEquation() {
    if (d < 0) {
        alert('Корней нет');
    } else if (d === 0) {
        let x = -b / (2 * a);
        alert(`x равен ${x}`);
    } else if (d > 0) {
        let x1 = ((-b + d ** 0.5) / (2 * a));
        let x2 = ((-b - d ** 0.5) / (2 * a));
        alert(`x1 = ${ x1 } \nx2 = ${ x2 }`);
    }
}
console.Log(solveEquation());
