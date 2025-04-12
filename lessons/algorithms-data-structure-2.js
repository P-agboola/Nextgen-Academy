// Beginner-Friendly JavaScript Code Examples

// --- 1. Arrays (JavaScript's built-in lists) ---
// Think of an array like a numbered list of items.

console.log("--- Array Examples ---");
let colors = ["red", "green", "blue"]; // Create an array (list) of colors
console.log(`Our list of colors: [${colors}]`);

// Getting the number of items (length)
console.log(`Number of colors: ${colors.length}`); // Output: 3

// Accessing items using their index (position)
// Indices start at 0!
console.log(`The first color (index 0): ${colors[0]}`); // Output: red
console.log(`The third color (index 2): ${colors[2]}`); // Output: blue

// Adding an item to the end (using push)
colors.push("yellow");
console.log(`Added yellow to the end: [${colors}]`); // Output: [red, green, blue, yellow]

// Removing the last item (using pop)
let removedColor = colors.pop();
console.log(`Removed the last color (${removedColor}): [${colors}]`); // Output: [red, green, blue]

// Looping through items (common task)
console.log("Looping through colors:");
for (let i = 0; i < colors.length; i++) {
  console.log(` - Color at index ${i} is ${colors[i]}`);
}

console.log("-".repeat(25));

// --- 2. Linked Lists (A very basic idea) ---
// Imagine a treasure hunt where each clue leads to the next.
// Each clue is a "Node" containing data and the location of the next clue.

console.log("--- Linked List Examples ---");

// The "Clue" blueprint
class Node {
  constructor(data) {
    this.data = data; // The data (e.g., 'treasure map piece')
    this.next = null; // Where the next clue is (null means end of hunt)
  }
}

// The "Treasure Hunt" manager
class SimpleLinkedList {
  constructor() {
    this.head = null; // The starting point of the hunt (null means no clues yet)
  }

  // Add a new clue at the very end of the hunt
  addClue(data) {
    const newClue = new Node(data);

    // If the hunt hasn't started yet, this is the first clue
    if (this.head === null) {
      this.head = newClue;
    } else {
      // Otherwise, follow the clues to the very last one...
      let currentClue = this.head;
      while (currentClue.next !== null) {
        currentClue = currentClue.next; // Move to the next clue
      }
      // ...and point the last clue to our new one
      currentClue.next = newClue;
    }
    console.log(`Added clue: ${data}`);
  }

  // Display all the clues in order
  displayClues() {
    if (this.head === null) {
      console.log("The treasure hunt is empty!");
      return;
    }

    let path = [];
    let currentClue = this.head;
    while (currentClue !== null) {
      path.push(String(currentClue.data)); // Add clue data to our path display
      currentClue = currentClue.next; // Move to the next clue
    }
    console.log("Clue path: " + path.join(" -> "));
  }
}

// Let's start a hunt!
const hunt = new SimpleLinkedList();
hunt.addClue("Start Here");
hunt.addClue("Go North");
hunt.addClue("Look under rock");
hunt.addClue("X marks the spot!");

hunt.displayClues(); // Shows the path

console.log("-".repeat(25));

// --- 3. Sorting Algorithms (Putting things in order) ---

console.log("--- Sorting Algorithm Examples ---");
let numbersToSort = [5, 1, 4, 2, 8]; // Our messy numbers
console.log(`Unsorted numbers: [${numbersToSort}]`);

// --- 3a. Bubble Sort (Simple, but slow like watching bubbles rise) ---
// Compares pairs of neighbors and swaps them if they're in the wrong order.
// Repeats until no more swaps are needed.
function simpleBubbleSort(arr) {
  let numbers = [...arr]; // Copy the array so we don't change the original
  let n = numbers.length;
  let swapped; // To check if we made any swaps in a pass

  console.log("Starting Bubble Sort...");
  do {
    swapped = false; // Assume no swaps needed for this pass
    for (let i = 0; i < n - 1; i++) {
      // Compare current number with the next one
      if (numbers[i] > numbers[i + 1]) {
        // If they are in the wrong order, swap them!
        console.log(`   Swapping ${numbers[i]} and ${numbers[i + 1]}`);
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapped = true; // We made a swap, so need at least one more pass
      }
    }
    // Optimization: The last element after each pass is sorted, so we can ignore it
    n--;
  } while (swapped); // Keep going as long as we are making swaps

  console.log("Bubble Sort finished.");
  return numbers;
}

let bubbleSortedNumbers = simpleBubbleSort(numbersToSort);
console.log(`Bubble Sorted: [${bubbleSortedNumbers}]`);
console.log("..."); // Ellipses for brevity if needed

// --- 3b. Merge Sort (Divide and Conquer - more complex but faster) ---
// 1. Divide: Keep splitting the list in half until you have lists of 1 item.
// 2. Conquer: Merge the small sorted lists back together in the correct order.
// (Merge Sort code can be complex for absolute beginners, focusing on Bubble Sort might be better initially)
// (Skipping detailed beginner Merge Sort code here for simplicity, Bubble Sort illustrates basic sorting)

// --- 3c. Quick Sort (Also Divide and Conquer - often very fast) ---
// 1. Pick a 'pivot' element.
// 2. Partition: Rearrange the list so smaller items are before the pivot, larger items after.
// 3. Recursively sort the two partitions.
// (Quick Sort partitioning can also be complex for beginners)
// (Skipping detailed beginner Quick Sort code here)

console.log("-".repeat(25));

// --- 4. Searching Algorithms (Finding an item) ---

console.log("--- Searching Algorithm Examples ---");
let numberList = [2, 8, 1, 5, 4]; // List to search within
let sortedNumberList = [1, 2, 4, 5, 8]; // A sorted version needed for Binary Search
let target = 5; // The number we want to find

console.log(`List to search: [${numberList}]`);
console.log(`Sorted list:    [${sortedNumberList}]`);
console.log(`Target number:  ${target}`);

// --- 4a. Linear Search (Checking one by one) ---
// Look at each item from the beginning until you find the target.
// Works on ANY list (sorted or not).
function simpleLinearSearch(arr, valueToFind) {
  console.log("Starting Linear Search...");
  for (let i = 0; i < arr.length; i++) {
    console.log(`   Checking index ${i} (value ${arr[i]})...`);
    if (arr[i] === valueToFind) {
      console.log(`   Found ${valueToFind} at index ${i}!`);
      return i; // Return the index where it was found
    }
  }
  // If the loop finishes without finding the value
  console.log(`   ${valueToFind} was not found in the list.`);
  return -1; // Indicate that the value was not found
}

let linearIndexResult = simpleLinearSearch(numberList, target);
// Try searching for something not there
simpleLinearSearch(numberList, 99);

// --- 4b. Binary Search (Smart searching on SORTED lists) ---
// 1. Look at the middle item.
// 2. If it's the target, great!
// 3. If the target is smaller, search the left half.
// 4. If the target is larger, search the right half.
// 5. Repeat until found or the search area is empty.
// **IMPORTANT: Requires the list to be SORTED first!**
function simpleBinarySearch(sortedArr, valueToFind) {
  console.log("Starting Binary Search (requires sorted list)...");
  let lowIndex = 0; // Start of the search area
  let highIndex = sortedArr.length - 1; // End of the search area

  while (lowIndex <= highIndex) {
    // While there's still an area to search
    let middleIndex = Math.floor((lowIndex + highIndex) / 2); // Find the middle
    let guess = sortedArr[middleIndex]; // Get the value at the middle
    console.log(
      `   Searching between index ${lowIndex} and ${highIndex}. Middle is index ${middleIndex} (value ${guess})`
    );

    if (guess === valueToFind) {
      console.log(`   Found ${valueToFind} at index ${middleIndex}!`);
      return middleIndex; // Found it!
    } else if (guess > valueToFind) {
      // If the guess was too high, ignore the right half
      console.log(`   Guess (${guess}) is too high. Searching left half.`);
      highIndex = middleIndex - 1;
    } else {
      // If the guess was too low, ignore the left half
      console.log(`   Guess (${guess}) is too low. Searching right half.`);
      lowIndex = middleIndex + 1;
    }
  }

  // If the loop finishes (lowIndex > highIndex)
  console.log(`   ${valueToFind} was not found in the sorted list.`);
  return -1; // Not found
}

let binaryIndexResult = simpleBinarySearch(sortedNumberList, target);
// Try searching for something not there
simpleBinarySearch(sortedNumberList, 99);

console.log("-".repeat(25));
