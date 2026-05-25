/* Calcular un promedio es una 
tarea extremadamente común, así que prueba a 
implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar
  let promedioTotal = 0;
  let sumaTotalArray = 0;
  let contador = 0;
  numberList.forEach(element => {
    sumaTotalArray+=element;
    contador++;
    promedioTotal = sumaTotalArray/contador;
  });
  console.log("suma del array: "+sumaTotalArray);
  console.log("promedio del array: "+promedioTotal.toFixed(2));
}

average(numbers);