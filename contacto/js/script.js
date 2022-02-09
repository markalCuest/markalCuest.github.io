const form = document.getElementById('form');

const username = document.querySelector("[name='username']");
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
const passwordCheck = document.querySelector("[name='password check']");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Nombre de usuario obligatorio');
    } else {
        setExitoFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email obligatorio');
    } else if (isEmail(email) != true) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setExitoFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Contraseña obligatoria');
    } else {
        setExitoFor(password);
    }
    if (passwordCheckValue === '') {
        setErrorFor(passwordCheck, 'Contraseña obligatoria');
    } else if (passwordCheckValue != passwordValue) {
        setErrorFor(passwordCheck, 'Password does not match');
    } else {
        setExitoFor(passwordCheck);
    }
};

function setErrorFor(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector('small');

    small.innerText = message;

    inputBox.className = 'input-box error';
};

function setExitoFor(input) {
    const inputBox = input.parentElement;
    inputBox.className = 'input-box exito';
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}