/**
 * Проверка строки на максимальную длину
 * @param {*} checkedString - строка
 * @param {*} maxLength - максимальная длина
 * @returns {boolean} - соответствие строки на максимальную длину
 */
const checkLength = (checkedString, maxLength) => checkedString.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey};
