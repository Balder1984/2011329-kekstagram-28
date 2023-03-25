
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};/*Функция по получению случайного целого числа в заданном интервале, включительно*/

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};/*Со стр. 1 по стр.18 Функция-генератор для получения случайных идентификаторов из указанного диапазона, и так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.*/

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];/*Функция по поиску случайного элемента в переданном массиве*/

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement};
