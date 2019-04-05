exports.StringCalculator = x => {
  if (x == "") {
    return 0;
  }

  if (x.split(",").length === 2) {
    let first = x.split(",")[0];
    let last = x.split(",")[1];

    return Number(first) + Number(last);
  }

  return Number(x);
};
