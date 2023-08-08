const counterValueElement = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
counterValueElement.textContent = counterValue;

decrementBtn.addEventListener('click', function(){counterValue -= 1; counterValueElement.textContent = counterValue;});
incrementBtn.addEventListener('click', function(){counterValue += 1; counterValueElement.textContent = counterValue;});