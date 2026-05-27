/* Usa un for para remplazar todas las 
comidas que no sean veganas con las frutas 
del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

let indiceFruta = 0;

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let index = 0; index < foodSchedule.length; index++) {
    if(foodSchedule[index].isVegan === false){
        foodSchedule.splice(index, 1, {
        name: fruits[indiceFruta++],
        isVegan: true
            }
        );
    }
}

console.log(foodSchedule);