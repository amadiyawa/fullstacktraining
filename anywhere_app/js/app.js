const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const { document } = window;

let paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)

function factorial(n) {
  if (n < 0) {
    return "not defined";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log("The factorial of 5 is " + factorial(5));

function combining(p, n) {
  if (p > n) {
    console.log("p cannot be greater than n");
  } else {
    console.log("p combining n is " + factorial(n) / (factorial(p) * factorial(n - p)));
  }
}
combining(3, 6);

function primeNumber(n) {
  if (n < 2) {
    return n + " is not a prime number";
  } else {
    let isPrime = true;
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return n + " is a prime number";
    } else {
      return n + " is a not a prime number";
    }
  }
}
console.log(primeNumber(13));
