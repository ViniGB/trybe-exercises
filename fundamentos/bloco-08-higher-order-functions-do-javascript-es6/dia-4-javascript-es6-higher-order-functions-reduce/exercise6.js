const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (listOfStudents, listOfPrices) => listOfStudents.map((product, index) => (
  { name: product, average: listOfPrices[index].reduce((acc, curr) => acc + curr) / listOfPrices[index].length }
));

const object = studentAverage(students, grades);

console.log(object);

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
