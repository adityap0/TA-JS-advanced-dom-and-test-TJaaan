let functions = {
  getFullName: (firstName, lastName) => {
    return firstName + " " + lastName;
  },
  isPalindrome: (str) => {
    let checkArr = str.split("");
    let count = 0;
    let revArr = [...checkArr].reverse();
    checkArr.forEach((item, id) => {
      if (item === revArr[id]) {
        count += 1;
      }
    });
    if (count === checkArr.length) {
      return true;
    } else return false;
  },
  getCircumfrence: (radius) => {
    return 2 * 3.14 * radius;
  },
  getArea: (r) => {
    return 3.14 * r * r;
  },
};

module.exports = functions;
