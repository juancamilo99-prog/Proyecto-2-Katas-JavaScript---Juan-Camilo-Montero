/* Dada una lista de películas, cuenta 
cuántas son de antes del año 2000 
y cuántas son posteriores, utilizando un bucle.
Imprime ambos conteos por consola. */

let beforeCountMovie = 0;
let afterCountMovie = 0;


const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

for (const element of movies) {
    if(element.releaseYear<=2000){
        beforeCountMovie++;
    }
    if(element.releaseYear>2000){
        afterCountMovie++;
    }
}

console.log("las peliculas antes del 2000 son: "+beforeCountMovie);
console.log("las peliculas posteriores al 2000 son: "+afterCountMovie);


