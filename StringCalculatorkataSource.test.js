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

test("should return correct number when given single newline character in string", () => {
  expect(Source.StringCalculator("1\n2,3")).toBe(6);
  expect(Source.StringCalculator("1,2\n3")).toBe(6);
  expect(Source.StringCalculator("1,200,100\n600")).toBe(901);
});

test("should return correct number when given multiple newline characters in string", () => {
  expect(Source.StringCalculator("1\n2\n3")).toBe(6);
  expect(Source.StringCalculator("12,2\n9\n1")).toBe(24);
  expect(Source.StringCalculator("99\n200\n100\n600")).toBe(999);
});

test("should return six when given string including custom delimiter", () => {
  expect(Source.StringCalculator("//[,]\n1,2,3")).toBe(6);
  expect(Source.StringCalculator("//[;]\n1;2;3")).toBe(6);
});

test("should throw an exception that shows value when given single negative in string", () => {
  expect(() => {
    Source.StringCalculator("1,-2,3");
  }).toThrow("negatives not allowed: -2");
  expect(() => {
    Source.StringCalculator("-100");
  }).toThrow("negatives not allowed: -100");
});

test("should throw an exception that shows all negative values when given multiple in string", () => {
  expect(() => {
    Source.StringCalculator("-1,-2,3,-4");
  }).toThrow("negatives not allowed: -1,-2,-4");
  expect(() => {
    Source.StringCalculator("-1,-311,-400");
  }).toThrow("negatives not allowed: -1,-311,-400");
  expect(() => {
    Source.StringCalculator("-1111,-222,333,444,-55");
  }).toThrow("negatives not allowed: -1111,-222,-55");
});

test("should ignore any numbers bigger than 1000", () => {
  expect(Source.StringCalculator("1000,2000,2")).toBe(2);
  expect(Source.StringCalculator("1000,2000,2")).toBe(2);
  expect(Source.StringCalculator("900000")).toBe(0);
});

test("should allow custom delimiters of any length", () => {
  expect(Source.StringCalculator("//[***]\n998***1")).toBe(999);
  expect(Source.StringCalculator("//[bbbbb]\n998bbbbb1")).toBe(999);
  expect(Source.StringCalculator("//[bb***bb]\n997bb***bb1bb***bb1")).toBe(999);
});
