/**
 * @param {number} n
 * @return {boolean}
 */
var getDigits = (num) => {
    const digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  };
  
  var getSquaredTotal = (digits) => {
    return digits.reduce((total, digit) => total + digit * digit, 0);
  };
  
  var isHappy = function(n) {
    const seen = new Set();
    while (n !== 1) {
      let digits = getDigits(n);
      n = getSquaredTotal(digits);
      if (seen.has(n)) {
        return false;
      }
      seen.add(n);
    }
    return true;
  };