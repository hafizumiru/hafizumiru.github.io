// AUTO PADDING-TOP BASED ON NAVBAR HEIGHT SIZE

var navbar = document.querySelector('.navbar');
var content = document.querySelector('.content');
var targetSection = content.querySelectorAll('section');

var targetHeight = navbar.clientHeight;

targetSection.forEach(function(section) {
    section.style.paddingTop = targetHeight + 'px';
  });

//   AAA