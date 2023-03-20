//import {DESCRIPTION, NAMES, MESSAGES} from './consts.js';

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

function createRandomeId() {
  const id = createRandomIdFromRangeGenerator(1, 25);
  return id();
};

function createRandomUrl () {
  return `photos/${getRandomInteger(1, 25)}.jpg`;
};

function createRandomeLike() {
const likes = createRandomIdFromRangeGenerator(15, 200);
  return likes();
};

const DESCRIPTION = [
  'Закат',
  'Цветы',
  'Спортивный атомобиль',
  'Стая волков',
  'Награждение победителей',
  'Встреча глав государств',
  'кот Кекс',
];

function createRandomeIndexId() {
  const id = createRandomIdFromRangeGenerator(1, 1500);
  return id();
};

function createRandomAvatar () {
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
};

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Виктор',
  'Иван',
  'Мария',
  'Светлана',
  'Сергей',
  'Дмитрий',
  'Наталья',
];

function createRandomComment() {
  return {
    id: createRandomeIndexId(),
    avatar: createRandomAvatar(),
    messeges: getRandomArrayElement(MESSAGES),
    names: getRandomArrayElement(NAMES),
  };
}

function createPost() {
  return {
    id: createRandomeId(),
    url: createRandomUrl(),
    description: getRandomArrayElement(DESCRIPTION),
    likes: createRandomeLike(),
    comments: createRandomComment(),
  };
};

const similarComments = Array.from({length: 1}, createPost);

console.log(similarComments);

