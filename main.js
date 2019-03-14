function startMadLibs() {
    document.getElementById("name").innerText = window.prompt("What is your name?");



    let noun11 = window.prompt("Welcome to a Mad-Libs generator, give me a noun");
    document.getElementById("noun1").innerText = noun11;


    document.getElementById("placeLocation1").innerText = window.prompt("Give me a location or place");

    let she1 = window.prompt("Is your creation's proverb he or she?");
    let she = document.querySelectorAll(".SHe");
    for (let i = 0; i < she.length; i++) {
        she[i].innerText = she1;
    }


    document.getElementById("adj1").innerText = window.prompt("Give me an adjective");

    document.getElementById("adj2").innerText = window.prompt("Give me another adjective please");

    document.getElementById("quantifiers").innerText = window.prompt("Give me a quantifier, for example a lot, many, few, etc.");

    document.getElementById("listOfFriends").innerText = window.prompt("Give me a list of names, it can be one or two, but remember to put a comma after each name!");

    document.getElementById("adj3").innerText = window.prompt("Give me an adjective");


    let pet1 = window.prompt("Give me a pet");
    document.getElementById("pet").innerText = pet1



    let adj41 = window.prompt("Give me an adjective");
    document.getElementById("adj4").innerText = adj41



    let verb11 = window.prompt("Give me a verb");
    document.getElementById("verb").innerText = verb11



    let noun21= window.prompt("Give me a noun");
    document.getElementById("noun2").innerText = noun21;

    let verb21 = window.prompt("Give me a verb");
    document.getElementById("verb2").innerText = verb21;


    let noun31 = window.prompt("Give me a noun");
    document.getElementById("noun3").innerText = noun31;


    let hisHer1 = window.prompt("Does your creation go by his or her?");
    document.getElementById("hisHer").innerText = hisHer1



    let verb3 = window.prompt("Give me a verb");
    document.getElementById("verb3").innerText = verb3;
}



document.getElementById('StartMadLibs').onclick = startMadLibs;










let value=0;

document.querySelector('#value').innerHTML = value.toString