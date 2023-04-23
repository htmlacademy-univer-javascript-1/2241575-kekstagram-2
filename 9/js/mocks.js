/**
 * Генерация случайного числа из диапазона
 * @param {int} from - начальное число диапазона
 * @param {int} to - последнее число диапазона
 * @returns {int} - случайное число
 */
const randomNumber = (from, to) => {
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
const randomUniqNumber = (from, to) => {
  const previousValues = [];
  return function () {
    let currentValue = randomNumber(from, to);
    if (previousValues.length >= (to - from + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${  from  } до ${  to}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = randomNumber(from, to);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

/**
 * Генерация случайного элемента списка
 * @param {object} list - список
 * @returns - случайный элемент списка
 */
const getRandomArrayElement = (list) => list[randomNumber(1, list.length - 1)];

export {randomNumber, randomUniqNumber, getRandomArrayElement};
