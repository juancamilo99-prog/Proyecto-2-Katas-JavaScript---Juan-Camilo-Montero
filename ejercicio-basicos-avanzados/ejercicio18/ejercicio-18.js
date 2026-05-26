/* Usa un bucle for para recorrer todos los destinos del
array y elimina los elementos que tengan el id 11 y el id 40.
Imprime en un console log el array resultante. */

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

    
    const newArray = placesToTravel.filter(place => place.id !==5 && place.id !== 11);
    console.log(newArray);


