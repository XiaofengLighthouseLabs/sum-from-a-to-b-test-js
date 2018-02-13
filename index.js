
function sum(fromN, toN) {
  if (fromN >= toN){
    return toN;
  }
  // Sum all the values from fromN up to toN
  return toN + sum(fromN, toN-1)
}

module.exports = sum;
