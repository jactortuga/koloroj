import styles from '../sass/main.sass';


const keyboardKey       = 32;
const altKey            = 18;
const siteBackground    = document.body;
const siteHexContainer  = document.getElementById('siteHexContainer');
const menuButton        = document.getElementById('menuButton');
const menuContainer     = document.getElementById('menuContainer');
const menuGrid          = document.getElementById('menuGrid');
const creditsText       = document.getElementById('creditsText');
const colorRange        = 'ABCDEF0123456789';

var generateColor = () => {
  let newHexValue = '#';
  for (let i = 0; i < 6; i++) newHexValue += colorRange.charAt(Math.floor(Math.random() * colorRange.length));
  updateBackgroundColor(newHexValue);
  updateTextValue(newHexValue);
};

var copyColor = () => {
  var hexValue = siteHexContainer.innerHTML;

  if (hexValue.length > 7) return false;

  var newContainer  = document.createElement('div');
  var newBox        = document.createElement('button');
  var newHexValue   = document.createTextNode(hexValue);

  newContainer.classList.add('colors__label');
  newBox.classList.add('color');

  newContainer.appendChild(newBox);
  newContainer.appendChild(newHexValue);
  menuGrid.appendChild(newContainer);

};


var updateBackgroundColor = (newColor) => {
  siteBackground.style.backgroundColor = newColor;
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
