import styles from '../sass/main.sass';

console.log('Hello World!');

const keyboardKey = 32;

var generateColor = () => {
  alert('I am about to generate a color');
};


document.body.onkeyup = function(ev){
  if (ev.keyCode === keyboardKey) generateColor();
};
