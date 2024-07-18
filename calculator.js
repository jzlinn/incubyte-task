function add(number) {
  if (number === "") {
    return 0;
  }

  if (number.includes(",")) {
    const numberArr = number.split(",").map(num => parseInt(num, 10));
    return numberArr.reduce((acc, curr) => acc + curr, 0);
  }

  if (!number.includes(",")) {
    return false;
  }

}

module.exports = add;