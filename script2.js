let body = document.querySelector('body');
const h1 = document.createElement('h1');
body.appendChild(h1)
h1.innerText = 'Random Jokes';

// let button = document.getElementById('jokes_btn');
// button.setAttribute('placeholder', 'Jokes')

// let p = document.getElementById('p');



function getJoke() {
    console.log('displayJoke')
}
let button = document.querySelector('#Joke-button')
button.addEventListener("click", displayJoke)

import { displayJoke } from "./script.js";