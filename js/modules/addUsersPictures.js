import { addBigPhotoData, openModal } from './addBigPhotoData.js';
import { addThumbnailsData } from './addThumbnailsData.js';
import { SOME_PEOPLE_COUNT } from './data.js';

const picturesContainer = document.querySelector('.pictures');

const picturesTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const BigImageFragment = document.createDocumentFragment();

// Добавление изображений на страницу

const addUsersPictures = (data, sorting, count) => {
  data
    .slice(0, count ? count : SOME_PEOPLE_COUNT)
    .sort(sorting)
    .forEach(({ url, comments, likes, description }) => {
      const pictureElement = picturesTemplate.cloneNode(true);
      addThumbnailsData(pictureElement, url, comments, likes, description);

      pictureElement.addEventListener('click', (evt) => {
        evt.preventDefault();
        openModal();
        addBigPhotoData(url, comments, likes, description);
      });

      BigImageFragment.appendChild(pictureElement);
    });

  const usersPictures = picturesContainer.querySelectorAll('.picture');
  usersPictures.forEach((picture) => {
    picturesContainer.removeChild(picture);
  });

  picturesContainer.appendChild(BigImageFragment);
};

export { addUsersPictures };
