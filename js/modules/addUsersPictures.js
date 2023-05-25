import { someObjects } from "./util.js";
import { addBigPhotoData } from "./addBigPhotoData.js";
import { addThumbnailsData } from "./addThumbnailsData.js";

const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const BigImageFragment = document.createDocumentFragment();

const samePictures = someObjects();

// Добавление изображений на страницу

samePictures.forEach(({ url, comments, likes, description }) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  addThumbnailsData(pictureElement, url, comments, likes, description);

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    addBigPhotoData(url, comments, likes, description);
  });
  BigImageFragment.appendChild(pictureElement);
})

picturesContainer.appendChild(BigImageFragment);
