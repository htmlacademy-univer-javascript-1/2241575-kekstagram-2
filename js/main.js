let randomNumber = function(from, to) {
  let result;
  if (from<0 || to<0) {
    result = console.log('Диапазон должен быть положительным');
  } else if (to < from) {
    result = console.log(Math.floor(Math.random() * (from - to) + to));
    // Источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  } else {
    result = console.log(Math.floor(Math.random() * (to - from) + from));
  }
  return result
};

randomNumber(10, 5)
