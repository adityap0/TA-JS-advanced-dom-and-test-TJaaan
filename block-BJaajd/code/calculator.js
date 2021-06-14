function add(numA, numB) {
  return numA + numB;
}

function subtract(numA, numB) {
  if (numA > numB) {
    return numA - numB;
  } else {
    return numB - numA;
  }
}

function sum(numA, numB) {
  return numA + numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

function power(numA, numB) {
  return Math.pow(numA, numB);
}

function factorial(n) {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
