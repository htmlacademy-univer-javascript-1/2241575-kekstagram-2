import {picturesModule, fullPhotoInfo} from './thumbnails.js';
import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPicImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentTemplate = document.querySelector('#comment').content.querySelector('li');
const commentsOfPhoto = bigPicture.querySelector('.social__comments');
const descriptionOfPhoto = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

picturesModule.addEventListener ('click', (evt) => {
  if (evt.target.nodeName === 'IMG') {
    const pictureInfo = evt.target.closest('.picture');
    bigPicImg.src = evt.target.src;
    likesCount.textContent = pictureInfo.querySelector('.picture__likes').textContent;
    commentsCount.textContent = pictureInfo.querySelector('.picture__comments').textContent;

    /* Все комментарии и описание фото вывела в один объект fullPhotoInfo
    (ключ - ссылка на фото, значение - список комментариев), чтобы данные не потерялись */
    fullPhotoInfo[evt.target.src].forEach((commentDescr) => {
      const comment = commentTemplate.cloneNode(true);
      const avatar = comment.querySelector('img');
      avatar.src = commentDescr.avatar;
      avatar.alt = commentDescr.name;
      commentsOfPhoto.append(comment);
      comment.querySelector('p').textContent = commentDescr.message;
      descriptionOfPhoto.textContent = fullPhotoInfo['description'];
    });

    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    document.body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
  }
});

closeButton.addEventListener ('click', () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt)=> {
  if (isEscapeKey(evt)) {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
