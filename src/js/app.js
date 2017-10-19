import styles from '../sass/main.sass';

console.log('Hello World!');

var generateColor = () => {
  alert('I am about to generate a color');
};


document.body.onkeyup = function(e){
  if(e.keyCode === 32){
    generateColor();
  }
};
