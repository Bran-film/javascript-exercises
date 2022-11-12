const palindromes = function (str) {
  let check = /[\W_]/g;
  var lowerCaseStr = str.toLowerCase().replace(check, "");
  var reverseStr = lowerCaseStr.split("").reverse().join("");
  return reverseStr === lowerCaseStr;
};

// Do not edit below this line
module.exports = palindromes;
