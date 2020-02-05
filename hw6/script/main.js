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
    calculator.pow(5);
    calculator.print();
    calculator.sqrt(5);
    calculator.print();
    calculator.percent(10);
    calculator.print();
    calculator.divide(9);
    calculator.print();
    calculator.divide(5);
    calculator.print();
    console.log(calculator.print());
