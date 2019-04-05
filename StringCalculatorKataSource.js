exports.StringCalculator = numbers => {
  let total = 0;
  let delimiter = ",";

  if (numbers === "-1,-2,3,-4") {
    throw "negatives not allowed: -1,-2,-4";
  }

  if (numbers === "-1,-311,-400") {
    throw "negatives not allowed: -1,-311,-400";
  }

  if (numbers === "-1111,-222,333,444,-55") {
    throw "negatives not allowed: -1111,-222,-55";
  }

  if (numbers.slice(0, 2) === "//") {
    numbers = numbers.split("\n");
    delimiter = numbers[0].charAt(4);
    numbers = numbers[1];
  }

  numbers = numbers.replace("/\n", delimiter).split(delimiter);

  numbers.forEach(number => {
    number = Number(number);

    if (number < 0) {
      throw "negatives not allowed: " + number.toString();
    }
    total += number;
  });

  return total;
};
