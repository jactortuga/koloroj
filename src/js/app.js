import styles from '../sass/main.sass';

let latestHexCopied     = false;
let isHexCopied         = false;

const keyboardKey       = 32;
const altKey            = 18;
const siteBackground    = document.body;
const siteHexContainer  = document.getElementById('siteHexContainer');
const menuButton        = document.getElementById('menuButton');
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
  // if (!isHexCopied) enableCopyFunctionality();
  var hexValue = siteHexContainer.innerHTML;

  if (hexValue.length > 7 || hexValue === latestHexCopied) return false;

  enableCopyFunctionality();

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

var enableCopyFunctionality = () => {
  menuButton.disabled = false;
  menuButton.classList.add('button--enable');
  menuContainer.classList.add('menu--enable');

  setTimeout(function () {
    menuButton.classList.remove('button--enable');
    menuContainer.classList.remove('menu--enable');
  }, 600);
  isHexCopied = true;

  return true;
};

var updateTextValue = (newColor) => {
  siteHexContainer.innerHTML = newColor;
  siteHexContainer.classList.add('content__text--hex');
};

document.body.onkeyup = function(ev){
  if (ev.keyCode === keyboardKey) generateColor();
  if (ev.keyCode === altKey) copyColor();
};

menuButton.addEventListener('mouseenter', function() {
  menuContainer.classList.add('menu--reveal');
});

menuButton.addEventListener('mouseleave', function() {
  menuContainer.classList.remove('menu--reveal');
});

menuButton.addEventListener('keyup', function(ev) {
  ev.preventDefault();
});

menuButton.addEventListener('click', function() {
  if(menuButton.classList.contains('button--close')) {
    menuButton.classList.remove('button--close');
    menuContainer.classList.remove('menu--show');
    creditsText.classList.remove('credits--hide');
  } else {
    creditsText.classList.add('credits--hide');
    menuButton.classList.add('button--close');
    menuContainer.classList.add('menu--show');
  }
});

generateButton.addEventListener('click', function() {
  generateColor();
});

copyButton.addEventListener('click', function() {
  copyColor();
});
