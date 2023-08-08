const inputContent = document.querySelector('#name-input');
const titleName = document.querySelector('#name-output');

inputContent.addEventListener('input', onInputChange);

function onInputChange(event){if (inputContent.value === ""){titleName.textContent ="Anonymous";} else {titleName.textContent = event.currentTarget.value;}}

