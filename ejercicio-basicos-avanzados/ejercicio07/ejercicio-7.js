/* Completa esta función para que, al recibir 
dos números por argumento, 
te devuelva por consola el más alto de los dos. */
let numberOne = 10;
let numberTwo = 10;
greaterNumber(numberOne, numberTwo);

function greaterNumber(numberOne , numberTwo) {
  // Completar código
  if(numberOne>numberTwo){
    console.log(numberOne);
  } else if(numberTwo>numberOne){
    console.log(numberTwo);
  }
console.log("Los números son iguales");

}