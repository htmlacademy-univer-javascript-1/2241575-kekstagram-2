import {createDescriptionOfPhoto} from './data.js';

const picturesModule = document.querySelector('.pictures');

const photoThumbnailTemplate = document.querySelector('#picture').content.querySelector('a');
const photosFragment = document.createDocumentFragment();
const descriptionsOfPhotos = Array.from({length: 12}, createDescriptionOfPhoto);
const fullPhotoInfo = {};

descriptionsOfPhotos.forEach((photo) => {
  const thumbnail = photoThumbnailTemplate.cloneNode(true);
  const numberOfComments = thumbnail.querySelector('.picture__comments');
  const numberOfLikes = thumbnail.querySelector('.picture__likes');
  const thumbnailImg = thumbnail.querySelector('img');
  thumbnailImg.src = photo.url;
  numberOfComments.textContent = photo.comments.length;
  numberOfLikes.textContent = photo.likes;
  fullPhotoInfo[thumbnailImg.src] = photo.comments;
  fullPhotoInfo[`${thumbnailImg.src} description`] = photo.description;
  photosFragment.append(thumbnail);
});

picturesModule.append(photosFragment);

export{picturesModule, fullPhotoInfo};
