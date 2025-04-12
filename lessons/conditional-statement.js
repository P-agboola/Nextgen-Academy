// conditioal statement
// if statement
//if else statement or esle if statement
// nested if statement or nested if else statement
// switch statement
// ternary operator

// if statement
// if(condition){
//     // code to be executed if condition is true
// }
let age = 12;
let car = "toyota";
if (age >= 18) {
  // console.log("You are able to drive a car");
}

if (age < 18) {
  // console.log("You are not able to drive a car");
}

// if else statement
// // if (condition){
//     // code to be executed if condition is true
// }else {
//     // code to be executed if condition is false
// }

// if (age >= 18) {
//   console.log("You are able to drive a car");
//   console.log("You can vote");
// } else {
//   console.log("You are not able to drive a car");
//   console.log("You can not vote");
// }

//nested if statement
// if (condition) {
//   // code to be executed if condition is true
//   if (condition) {
//     // code to be executed if condition is true
//   }
// }

// age = 21;
// if (age >= 18) {
//   console.log("You are able to drive a car");
//   if (age >= 20) {
//     console.log("You can vote");
//   }
// }

//nested if else statement
// if (condition) {
//   // code to be executed if condition is true
// } else if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }

// age = 12;
// if (age >= 18) {
//   console.log("You are able to drive a car");
// } else if (age >= 16) {
//   console.log("You are able to drive a car");
// } else {
//   console.log("You are not able to drive a car");
// }

// switch statement

// switch (expression) {
//   case value1:
//     // code to be executed if expression is equal to value1
//     break;
//   case value2:
//     // code to be executed if expression is equal to value2
//     break;
//   default:
//   // code to be executed if expression is not equal to any of the values
// }

// let weekDay = "Wednesday";
// switch (weekDay) {
//   case "Monday":
//     {
//       console.log("Work from Office");
//     }
//     break;
//   case "Tuesday":
//     {
//       console.log("Work from Home");
//     }
//     break;
//   case "Wednesday":
//     {
//       console.log("Attend Evening Class");
//     }
//     break;
//   default: {
//     console.log("No activity scheduled for today");
//   }
// }

// let week = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// for (let i = 0; i < week.length; i++) {
//   console.log(week[i]);
//   weekDay = week[i];
//   activity(weekDay);
// }

// function activity(weekDay) {
//   switch (weekDay) {
//     case "Monday":
//       console.log("Work from Office");
//       break;
//     case "Tuesday":
//       console.log("Work from Home");
//       break;
//     case "Wednesday":
//       console.log("Attend Evening Class");
//       break;
//     default:
//       console.log("No activity scheduled for today");
//   }
// }

// ternary operator
// condition ? expression1 : expression2
// condition ? expression1 : expression2 ? expression3 : expression4
// age = 20;
// let canDrive =
//   age >= 18 ? "You are able to drive a car" : "You are not able to drive a car";
// console.log(canDrive);

// // calculate the discount of particular product

// && and operator
// || or operator


let totalProductPrice = 1200;
let discount;
let purchasePrice;

if (totalProductPrice > 500  && totalProductPrice <= 1000  ) {
  discount = 10;
  discountPrice = totalProductPrice * (discount / 100);
  purchasePrice = totalProductPrice - discountPrice;
  console.log("Your purchase price is " + purchasePrice);
  console.log();
} else if (totalProductPrice > 1000  && totalProductPrice <= 1500 ) {a
  discount = 20;
  discountPrice = totalProductPrice * (discount / 100);
  purchasePrice = totalProductPrice - discountPrice;
  console.log("Your purchase price is " + purchasePrice);
} else if (totalProductPrice > 1500) {
  discount = 25;
  discountPrice = totalProductPrice * (discount / 100);
  purchasePrice = totalProductPrice - discountPrice;
  console.log("Your purchase price is " + purchasePrice);
} else {
  discount = 0;
  console.log("You are not eligible for discount");
}
