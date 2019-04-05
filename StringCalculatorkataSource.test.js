const Source = require("./StringCalculatorKataSource.js");

test("should return zero when given empty string", () => {
  expect(Source.StringCalculator("")).toBe(0);
});

test("should return correct number when given a single value string", () => {
  expect(Source.StringCalculator("1")).toBe(1);
  expect(Source.StringCalculator("2")).toBe(2);
});
