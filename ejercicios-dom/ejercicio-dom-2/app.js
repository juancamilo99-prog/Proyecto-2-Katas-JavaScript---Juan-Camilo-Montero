//2.1
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);
//2.2
const divWhitP = document.createElement("div");
divWhitP.innerHTML = `<p></p>`;
document.body.appendChild(divWhitP)
//2.3
const divLoop = document.createElement("div");
for (let i = 0; i < 5; i++) {
    const p = document.createElement("p");
    divLoop.appendChild(p);
}

document.body.appendChild(divLoop);

//2.4
const divWhitText = document.createElement("div");
divWhitText.innerHTML = `<p>soy dinamico!</p>`;
document.body.appendChild(divWhitText)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const textH2 = document.querySelector("h2.fn-insert-here");
textH2.textContent = "Wubba Lubba dub dub"

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. 
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
    const aplication = apps[i];
    const li = document.createElement("li");
    li.innerHTML = 
    `<li> apps: ${aplication}</li>`;
    ul.appendChild(li);
    document.body.appendChild(ul);
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let nodoEliminate = document.querySelectorAll(".fn-remove-me");
for (const element of nodoEliminate) {
    element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.

const parra = document.createElement("p");
const divs = document.querySelectorAll("div");
parra.textContent = "Voy en medio!";
divs[1].before(parra);

//Inserta p con el texto 'Voy dentro!', dentro de todos 
// los div con la clase .fn-insert-here

let addText = document.querySelectorAll(".fn-insert-here");
for (const elementAdd of addText) {
    const pText = document.createElement("p");
    pText.textContent = "Voy dentro!";
    elementAdd.appendChild(pText);
}




