const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let getSum = 0;
  array.forEach((num) => {
    getSum += num;
  });
  return getSum;
};

const multiply = function (array) {
  let getSum = 1;
  array.forEach((num) => {
    getSum *= num;
  });
  return getSum;
};

const power = function (a, b) {
  let c = 1;
  for (i = 1; i <= b; i++) {
    c *= a;
  }
  return c;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
