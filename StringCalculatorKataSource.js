exports.StringCalculator = numbers => {
  if (numbers == "") {
    return 0;
  }

  if (numbers.split(",").length === 2) {
    let first = numbers.split(",")[0];
    let last = numbers.split(",")[1];

    return Number(first) + Number(last);
  }

  if (numbers.split(",").length == 3) {
    let first = numbers.split(",")[0];
    let second = numbers.split(",")[1];
    let last = numbers.split(",")[2];

    return Number(first) + Number(second) + Number(last);
  }

  if (numbers.split(",").length == 4) {
    let first = numbers.split(",")[0];
    let second = numbers.split(",")[1];
    let third = numbers.split(",")[2];
    let last = numbers.split(",")[3];

    return Number(first) + Number(second) + Number(third) + Number(last);
  }

  return Number(numbers);
};
