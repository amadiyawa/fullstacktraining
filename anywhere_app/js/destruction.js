const a = [1,2,3,4]
console.log(a)

// classic method for assigning each element of an array
const first = a[0]
const second = a[1]
const third = a[2]
const fourth = a[3]
console.log(first, second, third, fourth)

// assigning array's elements using destruction
let [b, c, d, e] = a
console.log(b, c, d, e)

// object destructuring
const Person = {
  name: "Kevin Erwin",
  age: 17,
  address: {
    city: "Bertoua",
    country: "Cameroon"
  }
}

// object destructuring the old way
const name = Person.name
const age = Person.age
const city = Person.address.city
const country = Person.address.country
console.log(name, age, city, country)

// object destructuring the new way
const {name: myName, age: myAge, address: {city: myCity, country: myCountry}} = Person
console.log(name, age, city, country)
