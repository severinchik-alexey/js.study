let calculator = (function () {
  let result = 0;
  return {
    clear(): function () {
      result = 0;
    },
    add(x) {
      result += x;
    },
    substract(x) {
      result -= x;
    },
    multiply(x) {
      result *=x; 
    },
    divide(x) {
      result /= x;
    }
    pow(x) {
      result **= x;
    },
    percent(x) {
      result %=x;
    },
    sqrt(x) {
      result = Math.sqrt(x);
    },
    print() {
      return result;
    }
    };
    })();
    calculator.add();
    console.log(calculator.print());
    calculator.pow();
    console.log(calculator.print());
    calculator.sqrt();
    console.log(calculator.print());
    calculator.percent();
    console.log(calculator.print());
    calculator.divide();
    console.log(calculator.print());
    calculator.divide();
    console.log(calculator.print());
    
