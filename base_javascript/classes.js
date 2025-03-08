class Person {
  constructor(name, age, address) {
    this.name = name
    this.age = age
    this.address = address
  }

  getPerson() {
    return `My name is ${this.name} I'm ${this.age} years old and I live in ${this.address}`
  }
}

const kevin = new Person("Kevin Erwin", 17, "Bertoua, Cameroon")
const amadou = new Person("Amadou", 25, "Yaounde, Cameroon")
console.log(kevin.getPerson())
console.log(amadou.name)
