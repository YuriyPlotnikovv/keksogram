// Получение рандомного числа

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandom };

// Проверка длины строки

const getLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false
};

export { getLength };

// Генерация рандомных элементов

const getRandomArrayElement = (elements) => {
  return elements[getRandom(0, elements.length - 1)];
};

export { getRandomArrayElement };

// Генерация рандомного массива

const someSet = (min, max, length) => {
    let set = new Set();
    while (set.size < length) set.add(getRandom(min, max));
    return set;
}
const someArray = Array.from(someSet(1, 25, 25))

export { someArray };

// Перемешивание массива

const shuffleArray = (array) => {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

export { shuffleArray };
