/* Buscar la palabra más larga: Completa la función 
que tomando un array de strings como argumento 
devuelva el más largo, en caso de que dos strings 
tenga la misma longitud deberá devolver el primero.

*/

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];


function findLongestWord(stringList) {
  // Completar código
    let longestWord = "";
    //recorro el array
    for(let i=0; i<stringList.length; i++){
      //luego pregunto si la palabra es mas larga que la siguiente y va guardando
      //la palabra mas larga.
      if(stringList[i].length > longestWord.length){
        longestWord = stringList[i];
      }
    }
    console.log(longestWord.length)
}
findLongestWord(avengers);