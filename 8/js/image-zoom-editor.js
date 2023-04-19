const zoomIn = document.querySelector('.scale__control--bigger');
const zoomOut = document.querySelector('.scale__control--smaller');
const zoomValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const zoomBorders = (num) =>{
  if (Number(num)>=100) {
    zoomValue.value = '100%';
    imgPreview.style.transform = 'scale(1.0)';
  }
  if (Number(num)<=25) {
    zoomValue.value = '25%';
    imgPreview.style.transform = 'scale(0.25)';
  }
};

const addHandlersToZoomSettings = () => {
  zoomIn.addEventListener('click', () => {
    let numberValue = zoomValue.value.replace('%', '');
    numberValue = Number(numberValue)+25;
    zoomValue.value = `${numberValue}%`;
    imgPreview.style.transform = `scale(${Number(numberValue)/100})`;
    zoomBorders(numberValue);
  });

  zoomOut.addEventListener('click', () => {
    let numberValue = zoomValue.value.replace('%', '');
    numberValue = Number(numberValue)-25;
    zoomValue.value = `${numberValue}%`;
    imgPreview.style.transform = `scale(${Number(numberValue)/100})`;
    zoomBorders(numberValue);
  });
};

export {addHandlersToZoomSettings};
