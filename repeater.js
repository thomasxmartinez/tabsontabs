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
