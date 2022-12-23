import { showAlert } from "./index.js";
const wishlistForm = document.querySelector('#wishlist__form');
const wishlistList = document.querySelector('.wishlist__elements');

let wishes = [];


wishlistForm.addEventListener('submit', addWish);

wishlistList.addEventListener('click', deleteWish);

document.addEventListener('DOMContentLoaded', () => {
    wishes = JSON.parse(localStorage.getItem('wishes')) || [];
    createHTML();
});


function addWish(e){

    e.preventDefault();

    const wish = document.querySelector('#wish__area').value;


    if (wish === '') {
        showAlert('Please, put a wish', wishlistForm);
        return;
    }

    const wishObj = {
        id: Date.now(),
        text: wish
    }

    wishes = [...wishes, wishObj];


    createHTML();

    wishlistForm.reset();

}

function createHTML() {

    cleanHTML();

    if(wishes.length > 0) {

        wishes.forEach(wish => {

            const deleteButton = document.createElement('A');
            deleteButton.classList.add('delete-wish')
            deleteButton.innerText = 'X';

            const li = document.createElement('LI');
            li.classList.add('bg-light', 'p-3', 'rounded-2', 'mb-2','fs-5', 'wishlist__element')

            li.innerText = wish.text;
            li.appendChild(deleteButton);
            li.dataset.wishId = wish.id;
            wishlistList.appendChild(li);

        });

    }

    addStorage();

}

function cleanHTML() {

    while(wishlistList.firstChild) {
        wishlistList.removeChild(wishlistList.firstChild);
    }
}

function addStorage() {

    localStorage.setItem('wishes', JSON.stringify(wishes));

}

function deleteWish(e) {

    e.preventDefault();
    const id = e.target.parentElement.dataset.wishId;
    wishes = wishes.filter(wish => wish.id != id);
    createHTML();

}

