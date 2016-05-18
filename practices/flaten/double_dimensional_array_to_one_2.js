'use strict';

function double_to_one(collection) {
  var array = deleteRepetition(collection);

  return array;
}

function deleteRepetition(collection) {
  var array = [];

  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {
      if (isExist(collection[i][j], array)) {
        array.push(collection[i][j]);
      }
    }
  }

  return array;
}

function isExist(element, array) {
  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {

      return false;
    }
  }

  return true;
}

module.exports = double_to_one;
