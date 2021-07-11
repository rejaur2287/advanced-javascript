const numbers = [3, 4, 5, 6, 7, 8];

// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

// function square(element) {
//   return element * element;
// }

// const square = (element) => element * element;
// const square1 = (x) => x * x;

// numbers.map(function (element, index, array) {
//   console.log(element, index, array);
//   //   return element * element;
// });

// const result = numbers.map(function (element) {
//   return element * element;
// });
// const result = numbers.map((element) => element * element);
// console.log(result);
// const result = numbe rs.f  ilter((x) => x < 3);
const result = numbers.find((x) => x > 5);
console.log(result);
