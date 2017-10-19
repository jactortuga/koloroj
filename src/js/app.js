import styles from '../sass/main.sass';

console.log('Hello World!');

const keyboardKey = 32;

var generateColor = () => {
  alert('I am about to generate a color');

  // Step 1: Pick random HEX value from color array
  // Step 2: Remove selected HEX element from color array
  // Step 3: Apply selected HEX value to background-color as inline style using transition
};


document.body.onkeyup = function(ev){
  if (ev.keyCode === keyboardKey) generateColor();
};
