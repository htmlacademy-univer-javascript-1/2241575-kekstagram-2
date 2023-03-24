import {descriptionsOfPhoto} from './data.js';

console.log(descriptionsOfPhoto);
const picturesModule = document.querySelector('.pictures');
const photoThumbnailTemplate = document.querySelector('#picture').content.querySelector('a');

const title = picturesModule.querySelector('.pictures__title');
title.classList.remove('visually-hidden');
