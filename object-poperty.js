const students = [
  { id: 12, name: 'Omar Sunny' },
  { id: 13, name: 'Faruk Islam' },
  { id: 57, name: 'Omar Faruk' },
  { id: 71, name: 'Depp Jol' },
];

const studentsName = [];
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  studentsName.push(element.name);
}
console.log(studentsName);

const names = students.map((s) => s.name);
const ids = students.map((s) => s.id);
const bigger = students.filter((s) => s.id > 50);
const biggerOne = students.find((s) => s.id > 50);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);
