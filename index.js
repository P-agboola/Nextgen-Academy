let list = ['apple', 2000, 'favour', 12n, true, 3.14, ]

const newElement = list.push('Dog')
console.log(newElement)
console.log(list)
list.pop()

console.log(list)
list.unshift('Dog')
console.log(list)
list.shift()
console.log(list)

// remove an element at a specific index
list.splice(1,0)
console.log(list)

// add a new element at a specific index
list.splice(3,0,'Dog','book')
console.log(list)

