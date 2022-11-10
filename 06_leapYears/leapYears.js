const leapYears = function (year) {
  // year % 4 === 0 / true
  // year % 100 === 0 / false
  // year % 400 === 0 / true

  if (year % 4 === 0) {
    if (year % 400 === 0 || year % 100 !== 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
