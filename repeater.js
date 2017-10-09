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

function squareOrSquareRoot(array) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) === Math.floor(Math.sqrt(array[i]))) {
      answer.push(Math.sqrt(array[i]));
    } else {
      answer.push(array[i] * array[i]);
    }
  }
  return answer;
}

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
console.log(countBy(1, 5));
