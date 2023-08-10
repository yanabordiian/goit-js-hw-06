const form = document.querySelector('.login-form');
const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    if(!emailInput.value || !passwordInput.value) {alert('Все поля должны быть заполнены.')}
    else{ const formData = {email: emailInput.value, password: passwordInput.value}; console.log(formData); 
emailInput.value = '';
passwordInput.value = '';
}
}


