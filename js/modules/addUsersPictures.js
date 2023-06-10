import { addBigPhotoData, openModal } from './addBigPhotoData.js';
import { addThumbnailsData } from './addThumbnailsData.js';

const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const BigImageFragment = document.createDocumentFragment();

// Добавление изображений на страницу

const addUsersPictures = (data) => {
  data.forEach(({ url, comments, likes, description }) => {
    const pictureElement = picturesTemplate.cloneNode(true);
    addThumbnailsData(pictureElement, url, comments, likes, description);

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal();
      addBigPhotoData(url, comments, likes, description);
    });
    BigImageFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(BigImageFragment);
};

export { addUsersPictures };
