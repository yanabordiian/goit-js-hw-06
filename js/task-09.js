function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
const bodyColor = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
buttonChangeColor.addEventListener('click', onChangeColor);
function onChangeColor(event) {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyColor.style.backgroundColor;
};