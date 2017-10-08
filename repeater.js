function quickSort(array) {
  var newArr = [];
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[array.length - 1];
  var left = [];
  var right = [];

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return newArr.concat(quickSort(left), pivot, quickSort(right));
}
console.log(quickSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]), '[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
