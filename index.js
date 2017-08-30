function tabbedContent (evt, tab) {
  var tabContent = document.getElementsByClassName('tabContent');
  var tabLinks = document.getElementsByClassName('tabLinks');

  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }
  document.getElementById(tab).style.display = 'block';
  evt.currentTarget.className += ' active';
}
