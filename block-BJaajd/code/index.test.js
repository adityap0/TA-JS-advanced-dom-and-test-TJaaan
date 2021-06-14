const { map } = require("./index");
let functions = require("./index");
const mockFnForEach = jest.fn();
functions.forEach(["one", "two", "three"], mockFnForEach);
test(`test forEach function`, () => {
  expect(
    functions.forEach([1, 2, 3], (num) => {
      num * 2;
    })
  ).toBe(undefined);
  expect(mockFnForEach.mock.calls.length).toBe(3);
  expect(mockFnForEach.mock.calls[0][0]).toBe("one");
  expect(mockFnForEach.mock.calls[1][0]).toBe("two");
  expect(mockFnForEach.mock.results[0][0]).toBe(undefined);
});
const mockFnMap = jest.fn((value) => {
  value * 2;
});
functions.map([1, 2, 4, 5, 6], mockFnMap);

test(`test map function`, () => {
  //   expect(
  //     functions.map([1, 2, 3], (num) => {
  //       return num * 2;
  //     })
  //   ).toEqual([2, 4, 6]);
  expect(mockFnMap.mock.calls.length).toBe(5);
  expect(mockFnMap.mock.calls[0].value).toBe(undefined);
  expect(mockFnMap.mock.calls[1].value).toBe(undefined);
});
