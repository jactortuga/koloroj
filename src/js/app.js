import styles from '../sass/main.sass';

console.log('Hello World!');


document.body.onkeyup = function(e){
  if(e.keyCode === 32){
    alert('ALERT');
  }
};
