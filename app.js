const form = document.querySelector('form');
const submit = document.querySelector('button');
const error__message = document.querySelector('.error__message');
const error__icon = document.querySelector('.error__icon');
const success__message = document.querySelector('.success__message');
const email = document.querySelector('input');

form.addEventListener('submit', validate);

function validate(e) {
    e.preventDefault();

    const input__value = email.value.trim();

    if (!isEmail(input__value)) {
        error__message.style.display = 'block';
        error__icon.style.display = 'block';
        success__message.style.display = 'none';
        email.classList.add('error-border');
        form.classList.add('shake-animation');

        setTimeout(() => {
            form.classList.remove('shake-animation');
        }, 10000);
    } else {
        error__message.style.display = 'none';
        error__icon.style.display = 'none';
        success__message.style.display = 'block';
        email.classList.remove('error-border');
    }
}

function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
