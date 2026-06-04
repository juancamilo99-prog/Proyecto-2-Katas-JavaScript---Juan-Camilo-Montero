//Dado el siguiente javascript, utiliza .filter() para mostrar por consola
//los streamers que incluyan la palabra introducida en el input. De esta forma, si
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputName = document.querySelector('[data-function="toFilterStreamers"]');

const div = document.createElement("div");
const ul = document.createElement("ul");

inputName.addEventListener('input', () => {
    const filterStreamer = streamers.filter(streamer => 
        streamer.name.toLowerCase().includes(inputName.value.toLowerCase()));

        ul.innerHTML = "";

        filterStreamer.forEach(streamer => {
            const li = document.createElement("li");
            li.textContent = streamer.name;
            ul.appendChild(li);
        });

    div.appendChild(ul);
    document.body.appendChild(div);

})