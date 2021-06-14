let functions = require("./index");
test("To check the fullName", () => {
  expect(functions.getFullName("Aditya", "Pathak")).toBe("Aditya Pathak");
});
test("To check Palindrome", () => {
  expect(functions.isPalindrome("adi")).toBe(false);
});
test("To check circumference", () => {
  expect(functions.getCircumfrence(7)).toBe(43.96);
});
test("To check area", () => {
  expect(functions.getArea(7)).toBe(153.86);
});
