//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click

const btnToclick = document.querySelector("#btnToClick");
btnToclick.addEventListener("click", (evento) =>{
    //console.log(evento);
})

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusClick = document.querySelector(".focus");
focusClick.addEventListener("focus", ()=>{
    console.log(focusClick.value);
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputClick = document.querySelector(".value");
inputClick .addEventListener("input", ()=>{
    console.log(inputClick.value);
})