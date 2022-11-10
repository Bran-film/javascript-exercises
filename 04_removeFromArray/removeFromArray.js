const removeFromArray = function (array, ...args) {
  args.forEach((arg) => {
    const index = array.indexOf(arg);
    if (index > -1) array.splice(index, 1);
  });
  return array;
};

// removeFromArray([4, 5, 7, 9], 4);

// Do not edit below this line
module.exports = removeFromArray;
