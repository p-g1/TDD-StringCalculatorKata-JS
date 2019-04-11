const Source = require("../StringCalculatorKata.js");
require("jest-each");

describe("StringCalculator", () => {
  it("should return zero when given empty string", () => {
    expect(Source.StringCalculator("")).toBe(0);
  });

  test.each`
    input   | expectedResult
    ${"1"}  | ${1}
    ${"2"}  | ${2}
    ${"99"} | ${99}
  `("should convert $input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input     | expectedResult
    ${"1,2"}  | ${3}
    ${"3,2"}  | ${5}
    ${"99,2"} | ${101}
  `("should convert $input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input         | expectedResult
    ${"2,3,4"}    | ${9}
    ${"10,15,4"}  | ${29}
    ${"10,10,10"} | ${30}
  `("should convert $input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input            | expectedResult
    ${"1,2,3,4"}     | ${10}
    ${"3,4,5,6"}     | ${18}
    ${"10,10,10,10"} | ${40}
  `("should convert $input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input               | expectedResult
    ${"1\n2,3"}         | ${6}
    ${"1,2\n3"}         | ${6}
    ${"1,200,100\n600"} | ${901}
  `("should convert input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input                  | expectedResult
    ${"1\n2\n3"}           | ${6}
    ${"12,2\n9\n1"}        | ${24}
    ${"99\n200\n100\n600"} | ${999}
  `("should convert input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input                | expectedResult
    ${"//[,]\n1,2,3"}    | ${6}
    ${"//[;]\n1;2;3"}    | ${6}
    ${"//[\n]\n1\n2\n3"} | ${6}
  `("should convert input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  it("should throw an exception that shows any negative values when given negative(s) in string", () => {
    expect(() => {
      Source.StringCalculator("1,-2,3");
    }).toThrow("negatives not allowed: -2");
    expect(() => {
      Source.StringCalculator("-100");
    }).toThrow("negatives not allowed: -100");
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

  test.each`
    input             | expectedResult
    ${"1000,2000,2"}  | ${2}
    ${"10001,2000,2"} | ${2}
    ${"900000"}       | ${0}
  `("should convert $input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input                                 | expectedResult
    ${"//[xxx]\n998xxx1"}                 | ${999}
    ${"//[bbbbb]\n998bbbbb1"}             | ${999}
    ${"//[bb!!!bb]\n997bb!!!bb1bb!!!bb1"} | ${999}
  `("should convert input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input                               | expectedResult
    ${"//[z][q]\n10z11z12q13"}          | ${46}
    ${"//[k][m][s]\n1m2k3s4"}           | ${10}
    ${"//[k][m][n][d]\n20d20n20m10k10"} | ${80}
  `("should convert input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input                                           | expectedResult
    ${"//[zzz][q]\n10zzz11zzz12q13"}                | ${46}
    ${"//[kkkk][m][sysy]\n1m2kkkk3sysy4"}           | ${10}
    ${"//[k][mm][nnn][dddd]\n20dddd20nnn20mm10k10"} | ${80}
  `("should convert input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });

  test.each`
    input                               | expectedResult
    ${"//[*][q]\n10*11*12q13"}          | ${46}
    ${"//[***][q]\n10***11***12q13"}    | ${46}
    ${"//[-][+][?+]\n10?+11-12+13"}     | ${46}
    ${"//[{}][---][?]\n10{}11---12?13"} | ${46}
  `("should convert input to $expectedResult", ({ input, expectedResult }) => {
    expect(Source.StringCalculator(input)).toBe(expectedResult);
  });
});
