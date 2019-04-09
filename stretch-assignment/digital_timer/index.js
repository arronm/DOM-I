const digits = document.querySelector('.digits');

const startTimer = () => {
  let counter = 0;
  let timer = window.setInterval(() => {
    counter += 10;
    digits.querySelector('#secondTens').innerHTML = Math.floor(counter / 10000);
    digits.querySelector('#secondOnes').innerHTML = Math.floor(counter / 1000) % 10;
    digits.querySelector('#msHundreds').innerHTML = Math.floor(counter / 100) % 10;
    digits.querySelector('#msTens').innerHTML = Math.floor(counter / 10) % 10;
    if (counter === 10000) {
      digits.style.color = 'red';
      clearInterval(timer);
      document.getElementById('reset-timer').disabled = false;
    }
  }, 10);
};

document.addEventListener('click', (event) => {
  if (!event.target.matches('#start-timer')) return;
  event.target.disabled = true;
  startTimer();
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('#reset-timer')) return;
  digits.style.color = 'inherit';
  digits.querySelectorAll('.digit:not(#colon)').forEach((digit) => {
    digit.innerHTML = '-';
  });
  document.getElementById('start-timer').disabled = false;
  document.getElementById('reset-timer').disabled = true;
})