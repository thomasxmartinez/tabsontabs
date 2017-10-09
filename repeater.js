class Tree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isUnique(string) {
  if (string < 2) {
    return string;
  }
  var chars = {};
  for (var i = 0; i < string.length; i++) {
    if (chars[string[i]]) {
      return false;
    }
    chars[string[i]] = true;
  }
  return true;
}
console.log(isUnique('brickshithouse'));

function myMap(array, func) {
  const answer = [];
  for (var i = 0; i < array.length; i++) {
    answer.push(func(array[i]));
  }
  return answer;
}

function myReduce(array, func, seed) {
  let answer = seed;
  for (var i = 0; i < array.length; i++) {
    answer = func(answer, array[i]);
  }
  return answer;
}

function myFilter(array, func) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      answer.push(array[i]);
    }
  }
  return answer;
}
