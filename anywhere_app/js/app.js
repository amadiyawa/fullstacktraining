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
  return (n * (n + 1)) / 2;
}
console.log(sumFirstN(5));




function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i;
  }
 return result;
}
console.log(fact(4));



function isLeapYear(year) {
   return (year % 4 === 0 && year % 100 !==0)||( year % 400 === 0);

  }

console.log(isLeapYear(2020));
console.log(isLeapYear(1900));



function printMultiplyTable(number) {
for ( let i = 1; i <= 10; i++){
 console.log (number + "x" + i + "=" + (number * i));
}
}
printMultiplyTable(5);




function power(base,exponent){
  return Math.pow(base,exponent);
  }
  console.log(power(5,3));





function Average(n) {
  let somme = 0;
  for (let i = 0; n.length; i++) {
    somme += n[i];
  }
return somme;
}
console.log(Average([4,6,8]));



function findMinAndMax(n) {
  let min = Math.min(n);
  let max = Math.max(n);
  return Math.max(min, max);
}
console.log(findMinAndMax([3,7,2,9,5,4]));




function convertKilometersToMeters(kilometers){
  return kilometers * 1000;

}
console.log(convertKilometersToMeters(4));



