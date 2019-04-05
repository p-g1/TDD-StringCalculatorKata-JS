exports.StringCalculator = numbers => {
  let total = 0;
  let delimiter = ",";

  if (numbers.slice(0, 2) === "//") {
    numbers = numbers.split("\n");
    delimiter = numbers[0].charAt(4);
    numbers = numbers[1];
  }

  numbers = numbers.replace("/\n", delimiter).split(delimiter);

  numbers.forEach(number => {
    number = Number(number);

    if (number < 0) {
      throw "negatives not allowed";
    }
    total += number;
  });

  return total;
};
