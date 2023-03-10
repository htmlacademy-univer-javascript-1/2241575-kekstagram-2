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

const randomNumber = function(from, to) {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//const checkLength = (checkedString, maxLength) => checkedString.length <= maxLength;

const getRandomArrayElement = (list) => list[randomNumber(1, list.length - 1)];

const createComment = function() {
  return {
    id: randomNumber(1, 25),
    avatar: `img/avatar-${randomNumber(1, 25)}.svg`,
    message: getRandomArrayElement(messageList),
    name: getRandomArrayElement(nameList),
  };
};

const createDescriptionOfPhoto = function() {
  return {
    id: randomNumber(1, 25),
    url: `photos/${randomNumber(1, 25)}.jpg`,
    description: 'Описание картинки',
    likes: randomNumber(15, 200),
    comments: [createComment()],
  };
};

const descriptionsOfPhoto = Array.from({length: 25}, createDescriptionOfPhoto);

console.log(descriptionsOfPhoto);
