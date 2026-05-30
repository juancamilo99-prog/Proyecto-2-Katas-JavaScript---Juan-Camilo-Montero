/* Crea una función llamada findArrayIndex que 
reciba como parametros un array de textos y un texto y 
devuelve la posición del array cuando el valor del array 
sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

function findArrayIndex(array, text) {
    //Tu codigo
    for (let index = 0; index < array.length; index++) {
       if(text === array[index]){
        const indiceArray = array.indexOf(text);
        console.log(indiceArray)
        return indiceArray;
       }
    }

    return -1;
}

function removeItemArray(array, text){
    const arrayNew = findArrayIndex(array, text);

    if(arrayNew !== -1){
        array.splice(arrayNew, 1);
    }

    for (const elementArray of array) {
        console.log(elementArray);
    }

    return array;
}


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

findArrayIndex(mainCharacters, "Obi-Wan")
removeItemArray(mainCharacters, "Obi-Wan")