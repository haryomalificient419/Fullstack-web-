//javascript variables
const x = 1
let y = 3

console.log(x, y) //print 1, 3
y += 15
console.log(x, y) //print 1, 18
y = "hello"
console.log(x, y) // print 1, 'hello'
//x = 4 // error

const arr = [1, 2, 3]
console.log(arr.length)
console.log(arr[1])

arr.forEach(value =>{
  arr.push(5)
  console.log(value)
})
