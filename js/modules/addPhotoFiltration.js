import { addUsersPictures } from './addUsersPictures.js';
import { debounce } from './util.js';

const imgFilters = document.querySelector('.img-filters');
const filtersButtons = imgFilters.querySelectorAll('.img-filters__button');
const defaultButton = imgFilters.querySelector('#filter-default');
const randomButton = imgFilters.querySelector('#filter-random');
const discussedButton = imgFilters.querySelector('#filter-discussed');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

// Показ фильтров

const showUsersFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

// Сортировка изображений

const getDiscussedRank = (photo) => {
  let rank = 0;
  rank = photo.comments.length;
  return rank;
};

const sortingByRank = (photoA, photoB) => {
  const rankA = getDiscussedRank(photoA);
  const rankB = getDiscussedRank(photoB);
  return rankB - rankA;
};

const randomSorting = () => {
  return Math.random() - 0.5;
};

// Фильтрация при клике по кнопкам фильтров

const changeButtonClass = (button) => {
  filtersButtons.forEach((filtersButton) => {
    filtersButton.classList.remove('img-filters__button--active');
  });
  button.classList.add('img-filters__button--active');
};

const buttonsClick = (callback, data, evt) => {
  if (evt.target == defaultButton) {
    callback(data);
  }
  if (evt.target == randomButton) {
    callback(data, randomSorting, 10);
  }
  if (evt.target == discussedButton) {
    callback(data, sortingByRank);
  }
};

const addFilters = (data) => {
  imgFiltersForm.addEventListener('click', (evt) => {
    changeButtonClass(evt.target);
    debounce(() => buttonsClick(addUsersPictures, data, evt), 500)();
  });
};

export { showUsersFilters, addFilters };
