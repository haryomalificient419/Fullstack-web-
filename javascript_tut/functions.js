const subtraction = (a, b) => {
  return a - b
}

console.log(subtraction(5, 4), subtraction(3, 5))

//for single parameter
const square = p =>{
  return p * p
}

//short form
const squared = p => p * p

console.log(squared(5), square(3,2))

//another way
function product(a, b){
  return a * b
}

const average = function(a, b){
  return (a+b)/2
}

console.log(product(7, 8))
console.log(average(8, 2))
