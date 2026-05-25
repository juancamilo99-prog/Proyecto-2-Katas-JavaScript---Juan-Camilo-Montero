const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  // Completar
  let newListDuplicates = [];

  list.forEach(element => {
    if(newListDuplicates.indexOf(element) === -1){
        newListDuplicates.push(element);
    }
  });

  newListDuplicates.forEach(element => {
    console.log(element);
  });
  return newListDuplicates;
}

removeDuplicates(duplicates);