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




function combinaison(n, p) {
  if (p > n) {
    throw new Error("p ne peut pas être supérieur à n.");
  }

  function factorielle(x) {
    let resultat = 1;
    for (let i = 2; i <= x; i++) {
      resultat *= i;
    }
    return resultat;
  }

  let resultat = factorielle(n) / (factorielle(p) * factorielle(n - p));
  console.log("La combinaison de {p} dans {n} est : {resultat}");
}




function estPremier(n) {
  if (n <= 1) {
    console.log("{n} n'est pas un nombre premier.");
  } else if (n === 2) {
    console.log("{n} est un nombre premier.");
  } else {
    let estPremier = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        estPremier = false;
        break;
      }
    }
    if (estPremier) {
      console.log("{n} est un nombre premier.");
    } else {
      console.log(`${n} n'est pas un nombre premier.`);
    }
  }
}
cosole.log(estPremier(25));

