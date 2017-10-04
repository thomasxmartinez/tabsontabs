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
