var total = 0;

exports.StringCalculator = numbers => {
  var standardDelimiter = ",";

  if (numbers.slice(0, 2) === "//") {
    numbers = extractDelimiters(numbers, standardDelimiter);
  }

  numbers = parseValues(numbers, standardDelimiter);

  if (numbers.some(number => number < 0)) {
    filterNegatives(numbers);
  }

  sum(numbers);

  return total;
};


const extractDelimiters = (numbers, standardDelimiter) => {
    var delimiters = "";
    
    delimiters = numbers
    .slice(numbers.indexOf("[") + 1, numbers.lastIndexOf("]"))
    .replace(/\[/g, "")
    .split("]");

    numbers = numbers.slice(numbers.lastIndexOf("]") + 1);
  
    delimiters.forEach(delimiter => {
      tempDelimiter = new RegExp("[" + delimiter + "]", "g");
      numbers = numbers.replace(tempDelimiter, standardDelimiter);
    });

    return numbers;
}

const filterNegatives = numbers => {
  let negatives = numbers.filter(number => number < 0);
    throw "negatives not allowed: " + negatives;
} 

const parseValues = (numbers, standardDelimiter) => {
  return numbers
    .replace(/\n/g, standardDelimiter)
    .split(standardDelimiter)
    .map(number => Number(number));
}

const sum = numbers => {
  total = 0;
  numbers.forEach(number => {
    if (number < 1000) {
      total += number;
    }
  });
}