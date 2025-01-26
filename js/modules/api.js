import { addUsersPictures } from './addUsersPictures.js';
import {
  errorAlertMessage,
  showErrorMessage,
  showSuccessMessage,
} from './addMessages.js';
import { addFilters, showUsersFilters } from './addPhotoFiltration.js';
import { closeImgModal } from './imgUploadModal.js';

// Получение и отрисовка данных с сервера

const getData = () => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      showUsersFilters();
      addUsersPictures(data);
      addFilters(data);
    })
    .catch(() => {
      errorAlertMessage(
        'При загрузке данных произошла ошибка, попробуйте перезагрузить страницу'
      );
    });
};

getData();

// Отправка данных из формы на сервер

const sendData = (formData) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      closeImgModal();
      showSuccessMessage();
    } else {
      closeImgModal();
      showErrorMessage();
    }
  });
};

export { sendData };
