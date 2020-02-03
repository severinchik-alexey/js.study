let calculator = (function () {
  let result = 0;
  return {
    clear() {
      result = 0;
    },
    add(x) {
      result += x;
    },
    substract(x) {
      result -= x;
    },
    multiply(x) {
      result *= x; 
    },
    divide(x) {
      result /= x;
    },
    pow(x) {
      result **= x;
    },
    percent(x) {
      result %= x;
    },
    sqrt(x) {
      result = Math.sqrt(x);
    },
    print() {
      return result;
    }
    };
    })();
    calculator.add(5);
    calculator.print();
    calculator.pow();
    calculator.print();
    calculator.sqrt();
    calculator.print();
    calculator.percent();
    calculator.print();
    calculator.divide();
    calculator.print();
    calculator.divide();
    calculator.print();
    console.log(calculator.print());
