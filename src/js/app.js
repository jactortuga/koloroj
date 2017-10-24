import styles from '../sass/main.sass';

let latestHexCopied     = false;
let isHexCopied         = false;

const keyboardKey       = 37;
const altKey            = 39;
const siteBackground    = document.body;
const siteHexContainer  = document.getElementById('siteHexContainer');
const menuOpenButton    = document.getElementById('menuOpenButton');
const menuCloseButton   = document.getElementById('menuCloseButton');
const copyButton        = document.getElementById('copyButton');
const generateButton    = document.getElementById('generateButton');
const menuContainer     = document.getElementById('menuContainer');
const menuGrid          = document.getElementById('menuGrid');
const creditsText       = document.getElementById('creditsText');
const colorRange        = 'ABCDEF0123456789';

var generateColor = () => {
  copyButton.classList.add('button--positioned');
  generateButton.classList.add('button--positioned');
  copyButton.disabled = false;
  let newHexValue = '#';
  for (let i = 0; i < 6; i++) newHexValue += colorRange.charAt(Math.floor(Math.random() * colorRange.length));
  updateBackgroundColor(newHexValue);
  updateTextValue(newHexValue);
};

var copyColor = () => {
  var hexValue = siteHexContainer.innerHTML;

  if (hexValue.length > 7 || hexValue === latestHexCopied) return false;

  animateColorMenu();

  var newContainer  = document.createElement('div');
  var newBox        = document.createElement('button');
  var newHexValue   = document.createTextNode(hexValue);

  newContainer.classList.add('colors__label');
  newBox.classList.add('colors__square');
  newBox.style.backgroundColor = hexValue;
  newContainer.appendChild(newBox);
  newContainer.appendChild(newHexValue);
  menuGrid.appendChild(newContainer);

  latestHexCopied = hexValue;
};


var updateBackgroundColor = (newColor) => {
  siteBackground.style.backgroundColor = newColor;

};

var animateColorMenu = () => {
  if (menuContainer.classList.contains('menu--show')) return false;

  menuOpenButton.disabled = false;
  menuOpenButton.classList.add('button--enable');
  menuContainer.classList.add('menu--enable');

  setTimeout(function () {
    menuOpenButton.classList.remove('button--enable');
    menuContainer.classList.remove('menu--enable');
  }, 600);
};

var updateTextValue = (newColor) => {
  siteHexContainer.innerHTML = newColor;
  siteHexContainer.classList.add('content__text--hex');
};

document.body.onkeyup = function(ev){
  if (ev.keyCode === keyboardKey) generateColor();
  if (ev.keyCode === altKey) copyColor();
};

menuOpenButton.addEventListener('mouseenter', function() {
  menuContainer.classList.add('menu--reveal');
});

menuOpenButton.addEventListener('mouseleave', function() {
  menuContainer.classList.remove('menu--reveal');
});

menuOpenButton.addEventListener('keyup', function(ev) {
  ev.preventDefault();
});



menuCloseButton.addEventListener('click', function() {
  creditsText.classList.remove('credits--hide');
  menuOpenButton.classList.remove('button--hide');
  menuContainer.classList.remove('menu--show');
});

menuOpenButton.addEventListener('click', function() {
  creditsText.classList.add('credits--hide');
  menuOpenButton.classList.add('button--hide');
  menuContainer.classList.add('menu--show');
});

generateButton.addEventListener('click', function() {
  generateColor();
});

copyButton.addEventListener('click', function() {
  copyColor();
});
