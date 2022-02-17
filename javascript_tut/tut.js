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
const arr2 = arr.concat(8)
const arr3 = arr.map(value => value * 2)
const arr4 = arr.map(value => '<li>' + value + '</li>')
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t
console.log(arr, arr2, arr3, arr4, first, second, rest)

arr.forEach(value => {
  arr.push(5)
  console.log(value)
})
