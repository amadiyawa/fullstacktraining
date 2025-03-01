var nom = "kevin"
console.log(nom)

const age = [1, 13, 26,46]
console.log(age)
age[8] = 23
console.log(age[8])

function factoriel() {
  console.log("Bonjour le monde")
}

function somme(a, b) {
  return a + b
}

function sommeTrois(a, b, c) {
  return somme(a, b) + c
}

console.log(sommeTrois(1,2,3))


let student  = {
  nom:"kevin",
  age:17,
  size:1.83,
  room:"premiere ti",
  location:"enia",
};
console.log(student)

function factorielle (n) {
  if (n < 0) {
    throw new error ("le parametre doit etre un entier naturel.");
  } else if (n === 0 || n === 1) {

    return 1;
  } else {
    return n *
    factorielle(n - 1);
  }

}
console.log(factorielle(5));

