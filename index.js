function tabbedContent(evt, tab) {
  var tabContent = document.getElementsByClassName('tabContent');
  var tabLinks = document.getElementsByClassName('tabLinks');

  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }
  document.getElementById(tab).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function find_average(array) {
  newArr = 0;
  count = 0;
  for (var i = 0; i < array.length; i++) {
    newArr += array[i];
    count++;
  }
  return newArr / count;
}

console.log(find_average([1, 2, 3]));

function litres(time) {
  if (time <= 0) {
    return 0;
  }
  return Math.floor(time * 0.5);
}

console.log(litres(2));
console.log(litres(1.4));
console.log(litres(12.3)); //, 6, 'should return 6 litres');
console.log(litres(0.82)); //, 0, 'should return 0 litres');
console.log(litres(11.8)); //, 5, 'should return 5 litres');
console.log(litres(1787)); //, 893, 'should return 893 litres');
console.log(litres(0)); //, 0, 'should return 0 litres');

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);

  return stitch(mergeSort(left), mergeSort(right));
}

function stitch(left, right) {
  var newArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      newArr.push(left.shift());
    } else {
      newArr.push(right.shift());
    }
  }
  return newArr.concat(left, right);
}

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]), '[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');

function findMedian(arr1, arr2) {
  var array = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      array.push(arr1.shift());
    } else {
      array.push(arr2.shift());
    }
  }
  var wholeArray = array.concat(arr1, arr2);
  return Math.floor(wholeArray[wholeArray.length / 2]);
}

console.log(findMedian([1, 2, 3, 4, 5], [1, 7, 8, 9, 10]), 'median should be 5');

function quickSort(array) {
  var newArray = [];
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[array.length - 1];
  var right = [];
  var left = [];
  for (var i = 0; i < array.length - 1; i++) {
    if (pivot < array[i]) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([9, 8, 7, 10, 5, 6, 3, 2, 1, 4]), '1,2,3,4,4,6,7,8,9,10');

function map(string) {
  var array = [];
  var count = 0;
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    obj[string[i]] = // must be a value to create instance
  }
  return obj;
}

console.log(map('lickyy'));

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

console.log(isUnique('lickyy'));

function squareOrSquareRoot(array){
  var answer [];
  for(var i = 0; i < array.length; i++){
    if(Math.sqrt(array[i])){
      answer.push(Math.sqrt(array[i]));
    }
    answer.push(array[i]*array[i]);
  }
  return answer;
}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))

function mergeSort(array){
  if(array.length < 2){
    return array;
  }
  var mid = Math.floor(array.length/2)
  var left = array.slice(0,mid);
  var right = array.slice(mid);

  return stitch(mergeSort(left), mergeSort(right))
}

function stitch(left, right){
  var newArray = [];
  while(left.length&&right.length){
    if(left[0]< right[0]){
      newArray.push(left.shift())
    }
    newArray.push(right.shift())
  }
  return newArray.concat(left, right)
}

console.log(mergeSort([5,6,7,8,9]))
