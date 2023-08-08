const inputContext = document.querySelector('#validation-input');
const lengthNumber = parseInt(inputContext.getAttribute('data-length'));

inputContext.addEventListener('blur', onInputBlur);
function onInputBlur(event){
    if(inputContext.value.length === lengthNumber){
        inputContext.classList.remove('invalid');
        inputContext.classList.add('valid');
    } else{
        inputContext.classList.remove('valid');
        inputContext.classList.add('invalid');

    }
}