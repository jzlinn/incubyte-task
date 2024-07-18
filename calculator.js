function add(number) {
  try {
    if (number === "") {
      return 0;
    }

    if (number.includes(",")) {
      let deLimit = /,|\n/;
      if (number.startsWith("//")) {
        let parts = number.split("\n");
        deLimit = new RegExp(parts[0].slice(2));
        number = parts[1];
      }
      number = number.replace(/\n/g, "");
      let numberArr = number.split(deLimit).map(num => parseInt(num, 10));
      let negativeArr = numberArr.filter(num => num < 0);

      if (negativeArr.length > 0) {
        throw(`negative number detected : ${negativeArr}`);
      }
      return numberArr.reduce((acc, curr) => acc + curr, 0);
    }

    if (!number.includes(",")) {
      return false;
    }
  } catch (error) {
    console.error('Error occured @ : ', error)
  }
}


module.exports = add;