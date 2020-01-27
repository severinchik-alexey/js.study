function solveEquation(a, b, c) {
    let d = Number((b ** 2) - (4 * a * c));
    if (d < 0) {
        return [];
    } else if (d === 0) {
        let x = Number(-b / (2 * a));
        return [x];
    } else if (d > 0) {
        let x1 = Number((-b + d ** 0.5) / (2 * a));
        let x2 = Number((-b - d ** 0.5) / (2 * a));
        return console.log([x1, x2]);
    }
}
console.log(solveEquation(3,-4, 1));
