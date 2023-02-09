module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let result = true;
  const brktsTypes = {};
  for (item of bracketsConfig) { //Наполняем объект образцами скобок
    brktsTypes[item[0]] = item[1]
  }

  for (letter of str) {
    for (key in brktsTypes) {
      // Когда добавлять в стэк
      if (letter === key && key !== brktsTypes[key]) stack.push(letter);
      else if (letter === key && key === brktsTypes[key] && stack.length === 0) stack.push(letter);
      else if (letter === key && key === brktsTypes[key] && stack[stack.length - 1] !== letter && stack.length > 0) stack.push(letter);
      // Когда удалять из стэка или выдавать false
      else if (letter === brktsTypes[key] && ((stack.length === 0) || (stack[stack.length - 1] !== key))) {
        result = false;
        break;
      }
      else if (letter === brktsTypes[key] && stack[stack.length - 1] === key) stack.pop();
    }
  }

  if (stack.length > 0) result = false;

  return result;
}