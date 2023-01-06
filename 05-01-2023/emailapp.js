function handleSubmit(e){
    e.preventDefault();
    console.log(e);
    const email = document.forms.login.email;
    const password = document.forms.login.password;
    const age = document.forms.login.age;
    console.log(email, password, age);
    const emailValue = email.value;
    const passwordValue = password.value;
    const ageValue = age.value;
    const passwordErrorDisplay = password.nextElementSibling;
    if(passwordValue.length < 6)
    {
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must be at least 6 characters.</li>';
    } 
    if(emailValue.length < 8){
        email.nextElementSibling.classList.remove('d-none');
    }
    if(passwordValue.includes(' '))
    {
        password.style.border = '1px solid red';
        passwordErrorDisplay.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must not contain spaces.</li>';
    } 
    if(ageValue < 18 || ageValue > 100){
        age.nextElementSibling.classList.remove('d-none');
    }
}
