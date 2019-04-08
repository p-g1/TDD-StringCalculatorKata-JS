exports.StringCalculator = numbers => {
  let total = 0;
  let standardDelimiter = ",";
  var delimiters = "";

  if (numbers.slice(0, 2) === "//") {
    delimiters = numbers
      .slice(numbers.indexOf("[") + 1, numbers.lastIndexOf("]"))
      .replace(/\[/g, "")
      .split("]");

    numbers = numbers.slice(numbers.lastIndexOf("]") + 1);

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
