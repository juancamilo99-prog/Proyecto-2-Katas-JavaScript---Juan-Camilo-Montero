/* Accederemos a los datos de una API pública de Game Of Thrones, 
queremos un select con todos los nombres de los personajes 
para que cuando un usuario 
seleccione un nombre salga su imagen en el medio de 
la página, algo así: */

const objectBody = {
  "id": 0,
  "firstName": "string",
  "lastName": "string",
  "fullName": "string",
  "title": "string",
  "family": "string",
  "image": "string",
  "imageUrl": "string"
}

const url = 'https://thronesapi.com/api/v2/Characters';

fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    const select = document.getElementById('character-list');
    data.forEach(element => {
        const option = document.createElement('option');
        const img = document.createElement('img');
        option.value = element.id;
        option.text = element.fullName;
        img.src = element.imageUrl;
        img.style.display = 'none';
        document.body.appendChild(img);
        select.addEventListener('change', ()=> {
            if (option.value === select.value){
                img.style.display = 'block';
            }else{
                img.style.display = 'none';
            } 
        })
        select.appendChild(option);
    })
}).catch(error => console.log(error));