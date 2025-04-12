let car = {
  make: "Toyota",
  model: "camry",
  year: 2025,
  colour: "Blue",
};
console.log(typeof car);

// dot notation
console.log(car.make);
console.log(car.colour);

console.log(`I have a new ${car.make} ${car.model}`);

let person = {
  name: "John Doe",
  age: 20,
  address: {
    street: "123 Main St",
    city: "Antony",
    state: "lagos",
  },
  hobbies: ["reading", "traveling", "sports"],
};

console.log(person.name);
console.log(person["age"]);

console.log(person.state);

console.log(person.hobbies[2]);

// Adding a new property to the object
//camel naming
person.phoneNumber = "080123345647";
person.email = "nextgen@gmail.com";
person["occupation"] = "Software Engineer";
person.address.LGA = "Alimosho"
person['hobbies'] = person.hobbies.push('chess')

console.log(person);
const hobby = person.hobbies[2]
console.log(hobby);


// Update an existing Property

person.age = 21

console.log(person);

car.make = 'lexus'
console.log(car);

person.address.city = 'VI'
console.log(person);



// Delete a property from an object
delete person.age
console.log(person);


// Assignments

1. Create an object called person with the following properties: name, age, occupation, hobbies, address (street, city, state).

2. Create  an object called trip with the following properties: destination, duration, activities (an array of activities), and budget.
3. Write a function that takes an object as an argument and returns the value of a specific property.
