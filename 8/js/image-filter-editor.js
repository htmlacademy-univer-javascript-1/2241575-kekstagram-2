const effectButtons = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level');
const valueElement = sliderElement.querySelector('.effect-level__value');

valueElement.value = 100;

const newSliderOptions = (min, max, step) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: max,
    step: step,
  });
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
});

const filterEditor = () => {
  effectButtons.forEach((effectButton) => {
    effectButton.addEventListener('change', (evt) => {
      const parent = evt.target.closest('li');
      const buttonClassList = parent.querySelector('span').classList;
      imgPreview.classList = ['img-upload__preview'];
      imgPreview.classList.add(buttonClassList[1]);

      if (imgPreview.classList.contains('effects__preview--chrome')) {
        newSliderOptions(0, 1, 0.1);
        imgPreview.style.filter = 'grayscale(1)';
      }
      if (imgPreview.classList.contains('effects__preview--sepia')) {
        newSliderOptions(0, 1, 0.1);
        imgPreview.style.filter = 'sepia(1)';
      }
      if (imgPreview.classList.contains('effects__preview--marvin')) {
        newSliderOptions(0, 100, 1);
        imgPreview.style.filter = 'invert(100%)';
      }
      if (imgPreview.classList.contains('effects__preview--phobos')) {
        newSliderOptions(0, 3, 0.1);
        imgPreview.style.filter = 'blur(3px)';
      }
      if (imgPreview.classList.contains('effects__preview--heat')) {
        newSliderOptions(0, 3, 0.1);
        imgPreview.style.filter = 'brightness(3)';
      }
      if (imgPreview.classList.contains('effects__preview--none')) {
        imgPreview.style.filter = '';
      }

      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        if (imgPreview.classList.contains('effects__preview--chrome')) {
          imgPreview.style.filter = `grayscale(${valueElement.value})`;
        }
        if (imgPreview.classList.contains('effects__preview--sepia')) {
          imgPreview.style.filter = `sepia(${valueElement.value})`;
        }
        if (imgPreview.classList.contains('effects__preview--marvin')) {
          imgPreview.style.filter = `invert(${valueElement.value}%)`;
        }
        if (imgPreview.classList.contains('effects__preview--phobos')) {
          imgPreview.style.filter = `blur(${valueElement.value}px)`;
        }
        if (imgPreview.classList.contains('effects__preview--heat')) {
          imgPreview.style.filter = `brightness(${valueElement.value})`;
        }
      });
    });
  });
};

filterEditor();
