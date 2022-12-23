const intro = document.querySelector('#intro');
const wishHome = document.querySelector('.wishlist');
const introForm = document.querySelector('#form');
const nameInput = document.querySelector('#name');


introForm.addEventListener('submit', submitForm);

function submitForm(e){

    e.preventDefault(e);

    const nameValue = nameInput.value;

    validateForm(nameValue);

}

function validateForm(nameValue) {

    if (nameValue === '') {
        showAlert('Please put your name', introForm);
        return;
    }

    showIndex(nameValue);

}

export function showAlert(message, place) {

    const alertExist = document.querySelector('.intro-alert');
    if(!alertExist) {
        const alert = document.createElement('P');
        alert.classList.add('text-white', 'bg-danger', 'p-2', 'intro-alert');
        alert.textContent = message;
        place.appendChild(alert);
        setTimeout(()=>{
            alert.remove();
        },3000)
    }

}

function showIndex(nameValue) {

    // Hide form 

    hideForm();

    // Custom Welcome Message
    welcomeMessage(nameValue);

    // Show Main Content
    wishHome.classList.remove('d-none');

}

function welcomeMessage(nameValue) {

    const nameExist = document.querySelector('.show-name');

    if (!nameExist) {

        const welcome = document.querySelector('#welcome');
        const name = document.createElement('SPAN');
        name.textContent = ` ${nameValue}!`;
        name.classList.add('show-name');
        welcome.appendChild(name);

    }

}

function hideForm() {

    intro.classList.remove('d-flex');
    intro.classList.add('d-none');

}