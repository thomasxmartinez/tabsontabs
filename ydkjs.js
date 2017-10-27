'use strict';
function findSmallestInt(args) {
  var limit = args.sort(function(a, b) {
    return a - b;
  });
  return limit[0];
}

findSmallestInt([78, 56, 232, 12, 8]); //,8,'Should return the smallest int 8');

function mergeArrays(arr1, arr2) {
  var newArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0] && arr1[0] !== arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return newArr.concat(arr1, arr2);
}
console.log(mergeArrays([1, 2, 3, 4], [4, 5, 6, 7]));
