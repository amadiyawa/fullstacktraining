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

function pairNumber(n) {
  if ( n % 2 === 0 ) {
    console.log( n + "is pair");
  } else {
    console.log( n + "is impair");
  }
}
pairNumber(13);

function findMax(num1, num2, num3){
  return Math.max(num1, num2, num3);
}
console.log(findMax(9,7,3));

function sumFirstN(n) {
  let i, sum = 0;
  for (i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum
}
console.log("The sum of the first 6 integers is " + sumFirstN(6));

function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i;
  }
 return result;
}
console.log(fact(4));

function isLeapYear(year) {
   return ((year % 4 === 0) || ((year % 100 !==0) && (year % 400 === 0)));
}
console.log(isLeapYear(2025));
console.log(isLeapYear(2024));

function printMultiplyTable(n) {
  for ( let i = 1; i <= 10; i++){
    console.log (n + " x " + i + " = " + (n * i));
  }
}
printMultiplyTable(5);

function findMinAndMax(n) {
  return {
    "minimum": Math.min(...n),
    "maximum": Math.max(...n)
  };
}
console.log(findMinAndMax([3,7,2,9,5,4]));

const add = (a, b) => {
  return a + b;
}
console.log(add(3,4));

function average(...n) {
  let somme = 0;
  for (let i = 0; i < n.length; i++) {
    somme += n[i];
  }
  return somme / n.length;
}
const numbers = [4, 6, 8, 9];
console.log(average(...numbers));

const sayHello = () => console.log("Hello")
sayHello()

function power(base,exponent){
  return Math.pow(base,exponent);
}
console.log(power(5,3));

function convertKilometersToMeters(kilometers){
  return kilometers * 1000;
}
console.log(convertKilometersToMeters(4));
