function add(number) {
  if (number === "") {
    return 0;
  }

  if (number.includes(",")) {
    return true;
  }

  if (!number.includes(",")) {
    return false;
  }



}

module.exports = add;