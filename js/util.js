const randomNumber = function(from, to) {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const randomUniqNumber = function(from, to) {
  const previousValues = [];
  return function () {
    let currentValue = randomNumber(from, to);
    if (previousValues.length >= (to - from + 1)) {
      console.error(`Перебраны все числа из диапазона от ${  from  } до ${  to}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumber(from, to);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

//const checkLength = (checkedString, maxLength) => checkedString.length <= maxLength;

export {randomNumber, randomUniqNumber};
