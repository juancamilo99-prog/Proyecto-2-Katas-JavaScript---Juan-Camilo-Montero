//4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filterAges = ages.filter(age => age > 18);
console.log(filterAges)

//4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean par.
const agesPar = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filterPar = agesPar.filter(age => age % 2 === 0);
console.log(filterPar)

//4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filterStrearmes = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(filterStrearmes)

//4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//usar la funcion .includes() para la comprobación.

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerFiltres = streamers2.filter(elementStreamer => elementStreamer.name.includes('u'));
console.log(streamerFiltres);

//4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//.age sea mayor que 35.

const streamerGameMorePlayer = streamers2.filter(filterElement => filterElement.gameMorePlayed.includes('Legends'))
.map(filterElement => {
    if(filterElement.age > 35){
        return {
            ...filterElement, gameMorePlayed: filterElement.gameMorePlayed.toUpperCase()
        };
    }
    return filterElement;
});

console.log(streamerGameMorePlayer);
