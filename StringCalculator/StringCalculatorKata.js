const standardDelimiter = ",";

exports.StringCalculator = numbers => {
  return numbers
    .standardiseDelimiters()
    .parseValues()
    .ensureNoNegatives()
    .sum();
};

String.prototype.standardiseDelimiters = function() {
  if (this.slice(0, 2) === "//") {
    var delimiters = "";

    delimiters = this.slice(this.indexOf("[") + 1, this.lastIndexOf("]"))
      .replace(/\[/g, "")
      .split("]");

    var string = this.slice(this.lastIndexOf("]") + 1);

    delimiters.forEach(delimiter => {
      tempDelimiter = new RegExp("[" + delimiter + "]", "g");
      string = string.replace(tempDelimiter, standardDelimiter);
    });
    return string;
  }
  return this;
};

String.prototype.parseValues = function() {
  return this.replace(/\n/g, standardDelimiter)
    .split(standardDelimiter)
    .map(number => Number(number));
};

Array.prototype.ensureNoNegatives = function() {
  if (this.some(number => number < 0)) {
    let negatives = this.filter(number => number < 0);
    throw "negatives not allowed: " + negatives;
  }
  return this;
};

Array.prototype.sum = function() {
  var total = 0;
  this.forEach(number => {
    if (number < 1000) {
      total += number;
    }
  });
  return total;
};
