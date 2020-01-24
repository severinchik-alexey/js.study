let a = prompt('Введите a');
let b = prompt('Введите b');
let c = prompt('Введите c');
const disk = () => console.log(-b / (2 * a));
function solveEquation() {
    let d = b ** 2 - 4 * a * c;
    let x;
    if (d < 0) {
        alert('Корней нет');
        return undefined;
    } else if (d === 0) {
        x = disk;
        alert(`x равен ${x}`);
        return disk;
    } else if (d > 0) {
        let x1 = ((-b + d ** 0.5) / (2 * a));
        let x2 = ((-b - d ** 0.5) / (2 * a));
        alert(`x1 = ${ x1 } \nx2 = ${ x2 }`);
        return x1, x2;
    }
}
console.Log(solveEquation());