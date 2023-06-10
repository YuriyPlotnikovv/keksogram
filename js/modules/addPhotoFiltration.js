// Показ фильтров

const imgFilters = document.querySelector('.img-filters');

const showUsersFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};
export { showUsersFilters };
