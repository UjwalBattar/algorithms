const fs = require('fs');

// fs.readFile('./github-grabber-master/animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("3", data);
// });
//
// fs.writeFile('./example.txt', 'I will be written to example.txt', err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('File successfully written!');
// });
//
// console.log("1", process.argv);

function selectAnimals(animalString, animalLetter) {
  return animalString
    .split('\n')
    .filter(animal => animal.startsWith(animalLetter))
    .join('\n');
}

const animalLetter = process.argv[2].toUpperCase();

fs.readFile('./github-grabber-master/animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const animals = selectAnimals(data, animalLetter);

  fs.writeFile(`./${animalLetter}_animals.txt`, animals, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Successfully created ${animalLetter}_animals.txt`);
  });
});
