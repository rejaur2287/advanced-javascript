// Falsy Values = false, 0, '', undefined, null, NaN
// Truthy = '0', ' ', [], {}
// const age = 0;
// const name = 'Solaiman';
let name = 0;

if (name || name == 0) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}
