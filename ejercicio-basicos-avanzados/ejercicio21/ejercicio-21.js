/* Usa un bucle y dos condiciones 
para imprimir por consola el nombre de 
los usuarios que sean menor de edad precedidos 
del texto "Usuarios menores de edad:" 
y otro que imprima a los usuarios mayores de edad, 
precedido del texto "Usuarios mayores de edad:". */

let userLongAge = [];
let userSmallAge = [];

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (const element of users) {
    if (element.years >= 18) {
        userLongAge.push(element);
        
    }else{
        userSmallAge.push(element);
    }
}

for (const element of userLongAge) {
    console.log("Usuarios mayores de edad: "+element.name +" edad: "+element.years);
}

for (const element of userSmallAge) {
    console.log("Usuarios menores de edad: "+element.name +" edad: "+element.years);
}


