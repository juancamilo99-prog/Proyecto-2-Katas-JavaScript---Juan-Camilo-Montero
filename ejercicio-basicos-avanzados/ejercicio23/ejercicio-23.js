/* Usa un bucle para crear 3 arrays de películas 
filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, 
película mediana -> más de 100 minutos y menos de 200 
y pelicula grande -> más de 200 minutos.
Imprime cada array por consola.
 */

let smallMovie = [];
let largeMovie = [];
let mediumMovie = [];

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

for (const element of movies) {
    if(element.durationInMinutes <=100) smallMovie.push(element);
    if(element.durationInMinutes > 100 && element.durationInMinutes <= 200) mediumMovie.push(element);
    if(element.durationInMinutes > 200) largeMovie.push(element);
}

for (const elementSmallMovie of smallMovie) {
    console.log("peliculas pequeñas")
    console.log(elementSmallMovie);
}

for (const elementMediumMovie of mediumMovie) {
    console.log("peliculas medianas")
    console.log(elementMediumMovie);
}

for (const elementLargeMovie of largeMovie) {
    console.log("peliculas grandes")
    console.log(elementLargeMovie);
}