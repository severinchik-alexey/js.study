function solveEquation() {
    let a;
    do {
        a = parseInt(prompt('Введите a'));
    } while (isNaN(a) || !a || a===0);
    let b;
    do {
        b = parseInt(prompt('Введите b'));
    } while (isNaN(b) || !b);
    let c;
    do {
        c = parseInt(prompt('Введите c'));
    } while (isNaN(c) || !c);

    let d = (b ** 2) - (4 * a * c);
    if (d < 0) {
        alert('Корней нет');
        return [];
    } else if (d === 0) {
        let x = -b / (2 * a);
        alert(`x равен ${x}`);
        return parseInt[x];
    } else if (d > 0) {
        let x1 = (-b + d ** 0.5) / (2 * a);
        let x2 = (-b - d ** 0.5) / (2 * a);
        alert(`x1 = ${x1} \nx2 = ${x2}`);
        return parseInt([x1, x2]);
    }
}
console.log(solveEquation());
