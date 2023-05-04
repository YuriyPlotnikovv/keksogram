let getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 5));

let getLength = function (stroke, maxLength) {
  if (stroke.length <= maxLength) {
    return true;
  }
  return false
}
console.log(getLength('длина строки', 11));
