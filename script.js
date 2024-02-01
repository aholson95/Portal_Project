const myForm = document.querySelector('#my-form');
const favFood = document.querySelector('#fav-food');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.prevenDefault();

    if(favFood.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${favFood.value}`));

        userList.appendChild(li)
    }
}