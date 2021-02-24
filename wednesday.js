const postfixEvaluator = (str) => {
  let arr = [];
  let operands = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b / a) | 0,
  };
  for (let i of str.split` `)
    arr.push(operands[i] ? operands[i](arr.pop(), arr.pop()) : +i);
  return arr.pop();
};
