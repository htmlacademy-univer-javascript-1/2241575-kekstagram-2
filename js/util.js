/**
 * Генерация случайного числа из диапазона
 * @param {int} from - начальное число диапазона
 * @param {int} to - последнее число диапазона
 * @returns {int} - случайное число
 */
const randomNumber = function(from, to) {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * Генерация уникальных случайных чисел из диапазона
 * @param {int} from - начальное число диапазона
 * @param {int} to - последнее число диапазона
 * @returns {int}- случайное число
 */
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

/**
 * Проверка строки на максимальную длину
 * @param {*} checkedString - строка
 * @param {*} maxLength - максимальная длина
 * @returns {boolean} - соответствие строки на максимальную длину
 */
const checkLength = (checkedString, maxLength) => checkedString.length <= maxLength;

/**
 * Генерация случайного элемента списка
 * @param {object} list - список
 * @returns - случайный элемент списка
 */
const getRandomArrayElement = (list) => list[randomNumber(1, list.length - 1)];

export {randomNumber, randomUniqNumber, getRandomArrayElement};
