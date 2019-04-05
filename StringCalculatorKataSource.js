exports.StringCalculator = numbers => {
  let total = 0;
  let delimiter = ",";

  if (numbers.slice(0, 2) === "//") {
    numbers = numbers.split("\n");
    delimiter = numbers[0].charAt(4);
    numbers = numbers[1];
  }

  numbers = numbers.replace(/\n/g, delimiter).split(delimiter);

  if (numbers.some(number => Number(number < 0))) {
    let negatives = numbers.filter(number => Number(number) < 0);
    throw "negatives not allowed: " + negatives;
  }

  numbers.forEach(number => {
    number = Number(number);
    if (number < 1000) {
      total += Number(number);
    }
  });

  return total;
};
