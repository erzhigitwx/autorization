let input1 = document.querySelector('.form__user');
let label1 = document.querySelector('.form__user-des');
let input2 = document.querySelector('.form__pin');
let label2 = document.querySelector('.form__pin-des');
const button = document.querySelector('.form-btn');

function handlerInput1() {
    if(!label1.classList.contains('active-user')){
        label1.classList.add('active-user');
    }
}
function handlerInput2() {
    if(!label2.classList.contains('active-pin')){
        label2.classList.add('active-pin');
    }
}
const clickHandler = () => {
    input1.value = '';
    input2.value = '';
}
input1.addEventListener('focus', handlerInput1);
input2.addEventListener('focus', handlerInput2);
button.addEventListener('click', clickHandler);