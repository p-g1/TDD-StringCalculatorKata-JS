exports.StringCalculator = numbers => {
  let total = 0;
  numbers = numbers.split(",");

  numbers.forEach(number => {
    total += Number(number);
  });

  return total;
};
