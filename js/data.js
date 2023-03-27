import {randomNumber, randomUniqNumber, getRandomArrayElement} from './util.js';

const messageList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const nameList = [
  'Артём',
  'Ангелина',
  'Авдотья',
  'Жанна',
  'Оскар',
  'Лера',
  'ИмяУкрали',
  'Никита',
  'Дмитрий',
  'Святослав',
  'Игорь',
  'Максим',
];

const generateId = randomUniqNumber(1, 25);
const generatePhotoId = randomUniqNumber(1, 25);
const generateCommentId = randomUniqNumber(1, 100);

const createComment = function() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(messageList),
    name: getRandomArrayElement(nameList),
  };
};

const createDescriptionOfPhoto = function() {
  return {
    id: generateId(),
    url: `photos/${generatePhotoId()}.jpg`,
    description: 'Описание картинки',
    likes: randomNumber(15, 200),
    comments: Array.from({length: randomNumber(1, 6)}, createComment),
  };
};

export {createDescriptionOfPhoto};
