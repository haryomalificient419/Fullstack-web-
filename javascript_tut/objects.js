const car = {
  brand: 'Toyota',
  type: 'X',
  year: 1992,
}

const person = {
  name:{
    first: 'Lucas',
    last: 'Asimov',
  },
  age: 45,
  grades: [3, 4, 5, 2],
  department: 'Android university',
  greet: function(){
    console.log('hello, my name is ' + this.name.first + ' ' + this.name.last)
  },
}

person.setAge = function(age){
  this.age = age
}

//classes
class SomePerson{
  constructor(name, age){
    this.name = name
    this.age = age
  }
    greet(){
      console.log('hello, my name is ' + this.name)
    }
}

console.log(car['type'])
car['type'] = 'M'
console.log(car['type'])
console.log(person.age)
person.setAge(55)
console.log(person.age)
person.greet()

const george = new SomePerson('Adam George', 67)
george.greet()

const tanya = new SomePerson('Tanya James', 69)
tanya.greet()
