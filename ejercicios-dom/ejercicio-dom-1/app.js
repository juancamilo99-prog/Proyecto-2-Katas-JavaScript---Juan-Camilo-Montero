//1.1
const bottomClassShowme = document.querySelector(".showme");
console.log(bottomClassShowme.textContent);
//1.2
const showmessagePillado = document.querySelector("#pillado");
console.log(showmessagePillado.textContent);
//1.3
const showAllp = document.querySelectorAll("p");
showAllp.forEach(element =>{
    console.log(element.textContent)
});

//1.4
const showClassPokemon = document.querySelectorAll(".pokemon");
showClassPokemon.forEach(element => console.log(element.textContent));
//1.5
const showAllElementFunction = document.querySelectorAll('[data-function="testMe"]');
showAllElementFunction.forEach(element => console.log(element.textContent));
//1.6
const showThreeElement = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(showThreeElement.textContent)