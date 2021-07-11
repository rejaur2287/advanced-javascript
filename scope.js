let bonus = 20;
function sum(first, second) {
  let result = first + second + bonus;
  //   console.log(bonus);
  if (result > 9) {
    var mood = 'Happy';
    mood = 'Fishy';
    mood = 'Funcky';
    mood = 'Cranky';
    console.log(mood);
  }
  //   console.log(mood);
  console.log(day); //Undefined
  let day = 'Friday';
  //   console.log(day); //Friday
  return result;
}
const output = sum(176, 174);
// console.log(bonus);
// console.log(output);

// Hoisting is taking the scope to the upper level, of something that is declared(only declared part not value).
