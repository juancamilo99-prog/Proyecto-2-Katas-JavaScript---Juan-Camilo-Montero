//1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
for (let index = 0; index < countries.length; index++) {
    const countryList = countries[index];
    const li = document.createElement("li");
    li.innerHTML = 
    `<li> paises: ${countryList}</li>`;
    ul.appendChild(li);
    document.body.appendChild(ul);
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let elementRemove = document.querySelector(".fn-remove-me");
elementRemove.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');
const listaUl = document.createElement("ul");
for (let index = 0; index < cars.length; index++) {
    const autos = cars[index];
    const listLi = document.createElement("li");
    listLi.innerHTML = autos;
    listaUl.appendChild(listLi);
}
div.appendChild(listaUl);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.
const countriesArray = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let index = 0; index < countriesArray.length; index++) {
    const contentDiv = document.createElement("div");
    const contentH4 = document.createElement("h4");
    const contentIMG = document.createElement("img");
    const contentButton = document.createElement("button");
    contentButton.textContent = "Eliminar!";
    const contentCountry = countriesArray[index];
    contentH4.textContent = contentCountry.title;
    contentIMG.src = contentCountry.imgUrl;
    contentDiv.appendChild(contentH4);
    contentDiv.appendChild(contentIMG);
    contentDiv.appendChild(contentButton);


    contentButton.addEventListener("click", () =>{
        contentDiv.remove();
    });

    document.body.appendChild(contentDiv);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.

const buttonDelete = document.createElement("button");
buttonDelete.textContent = "Eliminar!";
buttonDelete.addEventListener("click",()=>{
    const divEliminate = document.querySelectorAll("div");
    const ultimoDiv = divEliminate[divEliminate.length - 1];
    ultimoDiv.remove();
    
});
document.body.appendChild(buttonDelete);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.

