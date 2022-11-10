// F -> C = xF = (x - 32) * 5/9C
// C -> F = xC = (x * 9/5 + 32) F

const ftoc = function (f) {
  let c = ((f - 32) * 5) / 9;
  return Number(Math.round(c + "e" + 1) + "e-" + 1);
};

const ctof = function (c) {
  let f = (c * 9) / 5 + 32;
  return Number(Math.round(f + "e" + 1) + "e-" + 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
