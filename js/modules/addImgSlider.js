import { uploadModal } from "./imgUploadModal.js";

// Подключение слайдера

const sliderContainer = uploadModal.querySelector('.effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const sliderValue = sliderContainer.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
const effectRadio = effectList.querySelectorAll('.effects__radio');
const imgPreview = uploadModal.querySelector('.img-upload__preview').children;

sliderValue.value = 0;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 10,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value)
    },
  },
});

sliderElement.setAttribute('disabled', true);
sliderContainer.setAttribute('hidden', true)

// Обновление слайдера

const sliderUpdate = (min, max, start, step) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
  });
  sliderElement.noUiSlider.set(start);
}

// Обновление эффектов


const effectUpdate = (effectNumber, min, max, start, step, effect, filter, ...symbol) => {

  if (effectRadio[effectNumber].checked) {
    sliderElement.noUiSlider.on('update', () => {
      sliderValue.value = sliderElement.noUiSlider.get();
      imgPreview[0].style.filter = filter + '(' + sliderValue.value + symbol + ')';
    });

    sliderUpdate(min, max, start, step);
    sliderElement.noUiSlider.set(max);
    imgPreview[0].classList.add('effects__preview--' + effect);

  } else {
    imgPreview[0].removeAttribute('style');
    imgPreview[0].classList.remove('effects__preview--' + effect);
  }
}

// Обновление всех параметров слайдера

effectList.addEventListener('change', () => {
  if (effectRadio[0].checked) {
    sliderElement.noUiSlider.updateOptions({
      start: 0,
    });
    sliderElement.noUiSlider.set(0);
    sliderElement.setAttribute('disabled', true);
    sliderContainer.setAttribute('hidden', true)
  } else {
    sliderElement.removeAttribute('disabled');
    sliderContainer.removeAttribute('hidden')
  };

  effectUpdate(1, 0, 1, 1, 0.1, 'chrome', 'grayscale');
  effectUpdate(2, 0, 1, 1, 0.1, 'sepia', 'sepia');
  effectUpdate(3, 0, 100, 100, 1, 'marvin', 'invert', '%');
  effectUpdate(4, 0, 3, 3, 0.1, 'phobos', 'blur', 'px');
  effectUpdate(5, 1, 3, 3, 0.1, 'heat', 'brightness');
})
