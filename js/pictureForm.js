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

formOpenButton.addEventListener('click', openEditingForm);
closeEditingFormMethods();

const re = /^((#[A-Za-zА-Яа-яЁё0-9]{1,19})\s*)+$/;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text'
}, true);

const validateHashtags = function() {
  return re.test(hashtags.value);
};

pristine.addValidator(hashtags, validateHashtags, 'Что-то не так');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
