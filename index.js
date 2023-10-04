// Console output 🤞
/*
Multiline
comment
*/
console.log("Hello World!!");

let example;
console.log(example);

let age = 45;
console.log(age);

age = 33.4;
console.log(age);

age = "Antonio";
console.log(age);

age = false;
console.log(age);

age = 85;

// Show in console my name and age
let firstName = "Diego";
// console.log("My name is " + firstName + " and my age is " + age);
let greeting = "My name is " + firstName + " and my age is " + age;
console.log(greeting);

firstName = "Pedro";
console.log(greeting, firstName);

console.log(5 + 5 - 10 * (5 - 2));
console.log(5 - 5);
console.log(5 / 5);
console.log(5 * 5);

console.log(5 == 5);
console.log(5 == 6);
console.log(5 == "5");

console.log(5 === "5");

console.log(5 !== 5);
console.log(5 !== 6);

console.log(4 < 10);
console.log(4 < 4);
console.log(4 <= 4);

let hasFalseDni = true;

if(hasFalseDni && age > 18){
  console.log('Eres mayor de edad. Disfruta la fiesta');
} else if(age > 14) {
  console.log("Puedes disfrutar de la fiesta hasta las 22:30h y sin beber");
} else {
  console.log("Vete a casa y descansa!");
} 


// Declarar variable price ✅
// > 65 ✅
// < 18 ✅
// 18 - 65 ✅

let price = 10;
if(age > 65) {
  console.log("Soy mayor de 65");
  // price = price - 5;
  price = 5;
  if(age > 90){
    price = 2;
  }
} else if(age < 18){
  console.log("Soy menor de 18");
  price = 8;
} else {
  console.log("Estoy en el medio");
}

console.log('La entrada me cuesta ' + price);