exports.StringCalculator = numbers => {
  if (numbers == "") {
    return 0;
  }

  numbers = numbers.split(",");

  if (numbers.length === 2) {
    let first = numbers[0];
    let last = numbers[1];

    return Number(first) + Number(last);
  }

  if (numbers.length == 3) {
    let first = numbers[0];
    let second = numbers[1];
    let last = numbers[2];

    return Number(first) + Number(second) + Number(last);
  }

  if (numbers.length == 4) {
    let first = numbers[0];
    let second = numbers[1];
    let third = numbers[2];
    let last = numbers[3];

    return Number(first) + Number(second) + Number(third) + Number(last);
  }

  return Number(numbers);
};
