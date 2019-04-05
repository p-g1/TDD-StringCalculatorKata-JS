exports.StringCalculator = numbers => {
  let total = 0;
  let delimiter = ",";

  if (numbers.slice(0, 2) === "//") {
    numbers = numbers.split("\n");
    delimiter = numbers[0].charAt(4);
    numbers = numbers[1];
  }

  numbers = numbers.replace("/\n", delimiter);
  numbers = numbers.split(delimiter);

  numbers.forEach(number => {
    total += Number(number);
  });

  return total;
};
