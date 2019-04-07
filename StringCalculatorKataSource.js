exports.StringCalculator = numbers => {
  let total = 0;
  let standardDelimiter = ",";
  var delimiters = "";
  if (numbers.slice(0, 2) === "//") {
    numbers = numbers.split("\n");

    delimiters = numbers[0]
      .slice(numbers[0].indexOf("[") + 1, numbers[0].lastIndexOf("]"))
      .replace(/\[/g, "")
      .split("]");

    numbers = numbers[1];

    // delimiters = new RegExp("\\" + delimiters.join("|\\") + "|,");

    delimiters.forEach(delimiter => {
      tempDelimiter = new RegExp("[" + delimiter + "]", "g");
      numbers = numbers.replace(tempDelimiter, standardDelimiter);
    });
  }

  numbers = numbers.replace(/\n/g, standardDelimiter).split(standardDelimiter);

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
