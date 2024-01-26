import './style.scss';

'use strict';

let qrHolder = document.querySelector('.qr-holder');
let qrImage = document.querySelector('.qr-image');

let inputText = document.querySelector('.input-text');
let generatorBtn = document.querySelector('.generator-btn');

function generateQR(userInput) {
  if(inputText.value.length > 0) {

    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userInput;
    qrHolder.classList.add('show-img');

  }else {
    inputText.style.border = '2px solid red';

    inputText.classList.add('error-message')
    setTimeout(() => {
      inputText.classList.remove('error-message');
    },1000)

  }
};

generatorBtn.addEventListener('click', (event) => {
  event.preventDefault();
  generateQR(inputText.value)
  inputText.value = '';
})