const Source = require("./StringCalculatorKataSource.js");

test("should return zero when given empty string", () => {
  expect(Source.StringCalculator("")).toBe(0);
});

test("should return correct number when given a single value string", () => {
  expect(Source.StringCalculator("1")).toBe(1);
  expect(Source.StringCalculator("2")).toBe(2);
  expect(Source.StringCalculator("99")).toBe(99);
});

test("should return correct number when given two value string", () => {
  expect(Source.StringCalculator("1,2")).toBe(3);
  expect(Source.StringCalculator("3,2")).toBe(5);
  expect(Source.StringCalculator("99,2")).toBe(101);
});

test("should return correct number when given three value string", () => {
  expect(Source.StringCalculator("2,3,4")).toBe(9);
  expect(Source.StringCalculator("10,15,4")).toBe(29);
  expect(Source.StringCalculator("10,10,10")).toBe(30);
});

test("should return correct number when given four value string", () => {
  expect(Source.StringCalculator("1,2,3,4")).toBe(10);
  expect(Source.StringCalculator("3,4,5,6")).toBe(18);
});

test("should return ten given '1/\n2,3'", () => {
  expect(Source.StringCalculator("1/\n2,3")).toBe(6);
});

test("should return six when given string including custom delimiter", () => {
  expect(Source.StringCalculator("//[',']\n1,2,3")).toBe(6);
  expect(Source.StringCalculator("//[';']\n1;2;3")).toBe(6);
});

test("should throw an exception when given '1,-2,3'", () => {
  expect(() => {
    Source.StringCalculator("1,-2,3");
  }).toThrow("negatives not allowed");
});

test("should throw an exception when given '-100'", () => {
  expect(() => {
    Source.StringCalculator("-100");
  }).toThrow("negatives not allowed");
});
