module.exports = 


function check(str, bracketsConfig) {
  const brktsTypes = {};
  const stack = [];
  let result = true;
  for (item of bracketsConfig) { //Наполняем объект образцами скобок
    brktsTypes[item[0]] = item[1];
  };

  for (letter of str) {
    // console.log(stack);
    for (key in brktsTypes) {
      if (letter === key && letter !== '|') stack.push(letter);
      else if (letter === key && letter === '|' && stack.length === 0) stack.push(letter);
      // else if (letter === '|' && ((stack.length === 0) || (brktsTypes[stack[stack.length - 1]] !== letter))) stack.push(letter);
      // else if (letter === '|') stack.push(letter);
      else if (letter === '|' && brktsTypes[stack[stack.length - 1]] !== letter) stack.push(letter);
      // else if (letter === '|' && brktsTypes[stack[stack.length - 1]] !== letter) stack.push(letter);
      else if (letter === brktsTypes[key] && ((stack.length === 0) || (stack[stack.length - 1] !== key))) {
        result = false;
        break;
      }
      else if (letter === brktsTypes[key] && stack[stack.length - 1] === key) stack.pop();
      // else if (letter === brktsTypes[key] && letter === '|') {
      //   console.log("checking: ", letter);
      //   console.log('current brackets types: ', brktsTypes);
      //   console.log('current stack: ', stack);
      //   stack.pop();
      // } 
      // else console.log('Not all cases are written!');
    }
  }

  if (stack.length > 0) result = false;

  // console.log(stack, result);
  return result;
}

// check('|(((|(|)', [['(', ')'], ['|', '|']])               // -> false




// check('|()|(||)||', [['(', ')'], ['|', '|']])         // -> true
// check('|()|', [['(', ')'], ['|', '|']])               // -> true
// check('||', [['|', '|']])                             // -> true
// check('()', [['(', ')']])                             // -> true
// check('((()))()', [['(', ')']])                       // -> true
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[]()', [['(', ')'], ['[', ']']])               // -> true
// check('[]()(', [['(', ')'], ['[', ']']])              // -> false
// check('())(', [['(', ')']])                           // -> false
// check('[(])', [['(', ')'], ['[', ']']])               // -> false


