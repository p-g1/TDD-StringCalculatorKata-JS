const Source = require("./StringCalculatorKataSource.js");

test("should return zero when given empty string", () => {
  expect(Source.StringCalculator("")).toBe(0);
});
