const car = {
  brand: 'Toyota',
  type: 'X',
  year: 1992,
}

const person = {
  name:{
    first: 'lucas',
    last: 'asimov',
  },
  grades: [3, 4, 5, 2],
  department: 'Android university'
}

console.log(car['type'])
car['type'] = 'M'
console.log(car['type'])
