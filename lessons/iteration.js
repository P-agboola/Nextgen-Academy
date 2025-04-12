// for loops

//print number from 0 to 10

for (let i = 0; i < 10; i++ ) {
  console.log(i);
}

// while loop
// print number from 0 to 10
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// mapping an array

// mutiplication of 2
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.map((num) => num * 2);
console.log(newArr);

let names = ["Ifeanyi", "Dami", "Wisdom", "Vincient"];

let newNames = names.map((name) => name.toUpperCase());
console.log(newNames);
let greeting = names.map((name) => {
  return `Hello ${name}`;
});
console.log(greeting);

// filter an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter the odd numbers
let oddNumbers = numbers.filter((num) => num % 2 != 0);
console.log(oddNumbers);

// filter the even numbers
let evenNumbers = numbers.filter((num) => {
  return num % 2 == 0;
});

// reduces an array

array.reduces((accumulator, currentValue) => {
  return updatedValue;
});

// get the sum of all the numbers in an array

 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  // return currentValue - accumulator;
});
console.log(sum);

let words = ["I", "love", "JavaScript"];
let sentence = words.reduce((phrase, word) => {
  return phrase + " " + word + " ";
});
console.log(sentence);

let itemPrices = [100, 250, 1000, 50, 200];

let maxPrice = itemPrices.reduce((max, price) => {
  return Math.max(max, price);
});
console.log('max price:',maxPrice)
