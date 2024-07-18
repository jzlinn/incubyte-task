function add(number) {
  if (number === "") {
    return 0;
  }

  if (number.includes(",")) {
    let deLimit = /,|\n/;
    if (number.startsWith("//")) {
        const parts = number.split("\n");
        deLimit = new RegExp(parts[0].slice(2));
        number = parts[1];
    }
    number = number.replace(/\n/g, "");
    const numberArr = number.split(deLimit).map(num => parseInt(num, 10));
    return numberArr.reduce((acc, curr) => acc + curr, 0);
  }

  if (!number.includes(",")) {
    return false;
  }

}

module.exports = add;