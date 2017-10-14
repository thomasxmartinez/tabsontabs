function monkeyCount(n) {
  var monks = [];
  for (var i = 1; i <= n; i++) {
    monks.push(i);
  }
  return monks;
}

function isUnique(string) {
  var chars = {};
  for (var i = 0; i < string.length; i++) {
    if (chars[string[i]]) {
      return false;
    }
    chars[string[i]] = true;
  }
  return true;
}

function checkPermute(str1, str2) {
  var chars1 = {};
  var chars2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    chars1[str1[i]] = true;
  }
  for (var i = 0; i < str2.length; i++) {
    if (!chars1[str2[i]]) {
      return false;
    }
  }
  return true;
}

function palindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function arrangeParagraph(string) {
  var count = 0;
  string = string.split(' ');
  var arranged = [];
  if (string.length < 20) {
    return string;
  }
  for (var i = 0; i < string.length; i++) {
    arranged.push(string[i]);
    count++;
    if (count === 20) {
      arranged.push('\n');
    }
  }
  return arranged.join(' ');
}

arrangeParagraph(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy I hate you"
);

function oneEdit(string1, string2) {
  var stringler = {};
  var count = 0;
  if (Math.abs(string1.length - string2.length) > 1) {
    return false;
  }
  for (var i = 0; i < string1.length; i++) {
    stringler[string1[i]] = true;
  }
  for (var j = 0; j < string2.length; j++) {
    if (!stringler[string2[j]]) {
      count++;
    }
  }
  return count <= 1;
}
console.log(oneEdit('pale', 'bales'));
