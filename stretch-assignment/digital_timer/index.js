const digits = document.querySelector('.digits');

let counter = 0;
const timer = window.setInterval(() => {
  counter += 10;
  digits.querySelector('#secondTens').innerHTML = Math.floor(counter / 10000);
  digits.querySelector('#secondOnes').innerHTML = Math.floor(counter / 1000) % 10;
  digits.querySelector('#msHundreds').innerHTML = Math.floor(counter / 100) % 10;
  digits.querySelector('#msTens').innerHTML = Math.floor(counter / 10) % 10;
  if (counter === 10000) clearInterval(timer);
}, 10);
