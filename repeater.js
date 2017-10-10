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

function boolToWord(bool) {
  if (bool === true) {
    return 'true';
  }
  return 'false';
}

function numberToString(num) {
  return num.toString();
}

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return `£${salary * 10}`;
  } else {
    return `£${salary}`;
  }
}

function fakeBin(string) {
  strArr = string.split('');
  var binary = '';
  for (var i = 0; i < strArr.length; i++) {
    var number = Number(strArr[i]);
    if (number < 5) {
      binary += '0';
    }
    if (number >= 5) {
      binary += '1';
    }
  }
  return binary;
}

function reverse(string) {
  var reversed = [];
  var newStr = string.split(' ');
  var start = newStr.length - 1;
  for (var i = start; i >= 0; i--) {
    reversed.push(newStr[i]);
  }
  return reversed.join(' ');
}

function longest(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  var chars = {};
  var unique = [];
  for (var i = 0; i < s2.length; i++) {
    if (!chars[s2[i]]) {
      unique.push(s2[i]);
      chars[s2[i]] += 1;
    }
  }
  for (var i = 0; i < s1.length; i++) {
    if (!chars[s1[i]]) {
      unique.push(s1[i]);
      chars[s1[i]] = true;
    }
  }
  return checkUnique(unique);
}

function checkUnique(array) {
  var obj = {};
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = true;
      answer.push(array[i]);
    }
  }
  return answer
    .sort()
    .join('')
    .toString();
}

function nbYear(p0, percent, aug, p) {
  var counter = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    counter += 1;
  }
  return counter;
}

function isIsogram(str) {
  if (str === '') {
    return true;
  }
  str = str.toLowerCase();
  var chars = {};
  for (var i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    }
    chars[str[i]] = true;
  }
  return true;
}

function maskify(cc) {
  var str = [];
  var count = cc.length - 4;
  var slicer = cc.slice(count);
  if (cc.length <= 4) {
    str.push(cc);
    return str.join('');
  }
  var i = 0;
  while (i < count) {
    i++;
    str.push('#');
  }
  str.push(cc.slice(count));
  return str.join('');
}

function filter_list(l) {
  var onlyInts = [];
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      onlyInts.push(l[i]);
    }
  }
  return onlyInts;
}
