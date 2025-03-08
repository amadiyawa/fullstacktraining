// old wat of doing things
const name = "Kevin Erwin";
const age = 17;
const address = "Bertoua, Cameroon";
console.log("My name is " + name + " I'm " + age + " years old and I live in " + address);

// template literals
console.log(`My name is ${name} I'm ${age > 18 ? "over 18" : "under 18"} years old and I live in ${address}`);
