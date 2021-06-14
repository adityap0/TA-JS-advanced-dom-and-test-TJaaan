let calculator = require("./calculator");

test("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
test("subtract", () => {
  expect(calculator.subtract(2, 3)).toBe(1);
});
test("sum", () => {
  expect(calculator.sum(2, 3)).toBe(5);
});
test("multiply", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
test("factorial", () => {
  expect(calculator.factorial(4)).toBe(24);
});
