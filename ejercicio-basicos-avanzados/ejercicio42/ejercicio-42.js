/* Crea una función llamada swap que reciba un array y dos 
parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Es decir, 
intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indiceOne, indiceTwo){

    const tempo = array[indiceOne];

    array[indiceOne] = array[indiceTwo];

    array[indiceTwo] = tempo;

    for (const elementArray of array) {
        console.log(elementArray)
    }
    return array;
}

swap(fantasticFour, 1,2)