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



async function user_number_fact(user_number, fact_options){
    const response = await fetch(`http://numbersapi.com/${user_number}/${fact_options}?json`)
    const data = await response.json()
    display.innerHTML = `
        <h2>${data.text}</h2>
    `
}
button.addEventListener("click", function(){
    random_number_fact()
})


submit.addEventListener("click", function(event){
    event.preventDefault();
    user_number_fact(user_number.value, fact_options.value);
})

/*
This isn't your project you push to your github
the project is in other folder
*/