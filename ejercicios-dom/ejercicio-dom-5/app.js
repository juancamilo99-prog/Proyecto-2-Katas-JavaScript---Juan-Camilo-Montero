const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const div = document.querySelector(".container-album");
const ul = document.createElement("ul");
for (let index = 0; index < albums.length; index++) {
    const albumnes = albums[index];
    const li = document.createElement("li");
    li.innerHTML = albumnes;
    ul.appendChild(li);
}
div.appendChild(ul); 