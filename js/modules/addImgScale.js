const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const VALUE_STEP = 25;
const imagePreview = document.querySelector('.img-upload__preview').children;

scaleSmaller.addEventListener('click', () => {
  if (parseInt(scaleValue.value) > 25) {
    const scaleCurrentValue = parseInt(scaleValue.value) - VALUE_STEP;
    imagePreview[0].style.transform = 'scale(' + (scaleCurrentValue * 0.01) + ')';
    scaleValue.value = scaleCurrentValue + '%';
  }
})
scaleBigger.addEventListener('click', () => {
  if (parseInt(scaleValue.value) < 100) {
    const scaleCurrentValue = parseInt(scaleValue.value) + VALUE_STEP;
    imagePreview[0].style.transform = 'scale(' + (scaleCurrentValue * 0.01) + ')';
    scaleValue.value = scaleCurrentValue + '%';
  }
})
