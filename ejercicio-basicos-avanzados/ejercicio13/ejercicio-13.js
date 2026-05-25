const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToFind) {
  // Completar
  let encontrado = false;

  nameList.forEach(element =>{
    if(element === nameToFind){
        encontrado = true;
    }
  });

    if(!encontrado){
        console.log("No se ha encontrado el nombre en el arreglo");
    }else {
        console.log("Se ha encontrado el nombre en el arreglo");
    }
  return encontrado;
}

nameFinder(names, "camilo");