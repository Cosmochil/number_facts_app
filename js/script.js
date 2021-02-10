let display = document.querySelector(`#display`);
let user_number = document.querySelector(`#user_number`);
let submit = document.querySelector(`#submit`);
let button = document.querySelector(`#random`);
let fact_options = document.querySelector(`#fact_options`);

let collection = ["trivia", "date", "year", "math"]
let random_fact = Math.floor(Math.random() * 4)

async function random_number_fact(){
    const response = await fetch(`http://numbersapi.com/random/${collection[random_fact]}?json`);
    const data = await response.json()
    display.innerHTML = `
        <h2>${data.text}</h2>
    `
}
button.addEventListener("click", ()=> random_number_fact())


async function user_number_fact(user_number, fact_options){
    const response = await fetch(`http://numbersapi.com/${user_number}/${fact_options}?json`)
    const data = await response.json()
    display.innerHTML = `
        <h2>${data.text}</h2>
    `
}

submit.addEventListener("click", (event)=> {
    event.preventDefault();
    user_number_fact(user_number.value, fact_options.value);
})

/*
Okay now its time to add CSS to this

First lets wrap the main into a container
*/