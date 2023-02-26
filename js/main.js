const randomNumber = function(from, to) {
  let result;
  if (from<0 || to<0) {
    result = 'Диапазон должен быть положительным';
  } else if (to < from) {
    result = Math.floor(Math.random() * (from - to) + to);
    // Источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  } else {
    result = Math.floor(Math.random() * (to - from) + from);
  }
  return result;
};

console.log(randomNumber(2, 50))

const checkLength = (checkedString, maxLength) => checkedString.length <= maxLength;

console.log(checkLength("lalala", 50))
