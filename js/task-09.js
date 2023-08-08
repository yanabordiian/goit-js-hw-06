function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
const widgetContent = document.querySelector('.widget');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click', onChangeColor);
function onChangeColor(event) {widgetContent.style.backgroundColor = getRandomHexColor()};