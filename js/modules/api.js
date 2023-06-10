import { addUsersPictures } from "./addUsersPictures.js";
import { SOME_PEOPLE_COUNT } from "./data.js";
import {
  errorAlertMessage,
  showErrorMessage,
  showSuccessMessage,
  showUsersFilters,
} from "./util.js";
import { closeImgModal } from "./imgUploadModal.js";

// Получение данных изображений с сервера

const getData = () => {
  fetch("https://25.javascript.pages.academy/kekstagram/data")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      addUsersPictures(data.slice(0, SOME_PEOPLE_COUNT));
    })
    .then(() => {
      showUsersFilters();
    })
    .catch(() => {
      errorAlertMessage(
        "При загрузке данных произошла ошибка, попробуйте перезагрузить страницу"
      );
    });
};

getData();

const sendData = (formData) => {
  fetch("https://25.javascript.pages.academy/kekstagram", {
    method: "POST",
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
