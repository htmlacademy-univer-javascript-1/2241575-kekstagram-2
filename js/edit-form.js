import {isEscapeKey} from './util.js';

const formOpenButton = document.querySelector('.img-upload__label');
const uploadForm = document.querySelector('.img-upload__form');
const formCloseButton = uploadForm.querySelector('.img-upload__cancel');
const editingForm = uploadForm.querySelector('.img-upload__overlay');
const hashtags = uploadForm.querySelector('.text__hashtags');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const photoComment = uploadForm.querySelector('.text__description');

const openEditingForm = function(evt) {
  evt.preventDefault();
  document.body.classList.add('modal-open');
  editingForm.classList.remove('hidden');
};

const closeEditingForm = function () {
  editingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadInput.innerHTML = '';
  hashtags.value = '';
  photoComment.value = '';
};

const closeEditingFormMethods = function() {
  formCloseButton.addEventListener ('click', () => {
    closeEditingForm();
  });

  document.addEventListener('keydown', (evt)=> {
    if (isEscapeKey(evt)) {
      closeEditingForm();
    }
  });
};

hashtags.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

photoComment.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

formOpenButton.addEventListener('click', openEditingForm);
closeEditingFormMethods();

/*Валидация формы*/
const re = /^((#[A-Za-zА-Яа-яЁё0-9]{1,19})\s*)+$/;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text'
}, true);

const validateHashtagsValue = function() {
  return re.test(hashtags.value);
};

const validateHashtagsSimilar = function() {
  const hashtagsList = hashtags.value.split(' ');
  const newHashtagsList = [];

  hashtagsList.forEach((hashtag) => {
    newHashtagsList.push(hashtag.toLowerCase());
  });

  for (let i=1; i <= newHashtagsList.length; i++) {
    if (newHashtagsList[i] === newHashtagsList[i-1]) {
      return false;
    } else {
      return true;
    }
  }
};

const validateHashtagsMax = function() {
  const hashtagsList = hashtags.value.split(' ');
  if (hashtagsList.length > 5) {
    return false;
  } else {
    return true;
  }
};

pristine.addValidator(hashtags, validateHashtagsValue, 'Неверно введенный хэш-тег');
pristine.addValidator(hashtags, validateHashtagsSimilar, 'Вижу одинаковые хэш-теги');
pristine.addValidator(hashtags, validateHashtagsMax, 'Превышен максимальный лимит хэш-тегов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
