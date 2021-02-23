//using else if statement
function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else return false;
}

//simplify the else if statement
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;
}

//ES6 way
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
