/* Contador de repeticiones: Crea una función que nos devuelva el 
número de veces que se repite cada una de las palabras que lo conforma.
Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
Podéis conformar el formato que queráis para la devolución del 
resultado siempre y cuando sea claro.*/

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  // Completar
  let contadorPalabras = [];
  let palabrasRepetidas = [];

  list.forEach(element => {
    palabrasRepetidas = element;

      if(contadorPalabras[palabrasRepetidas]){
        contadorPalabras[palabrasRepetidas]++;
      }else{
        contadorPalabras[palabrasRepetidas] = 1;
      }
  });
  console.log(contadorPalabras);
} 

repeatCounter(words);