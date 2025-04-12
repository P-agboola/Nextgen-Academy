// JavaScript Code Examples for Data Structures and Algorithms

// --- 1. Arrays ---
// JavaScript arrays are dynamic and versatile.

console.log("--- Array Examples ---");
let myList = [5, 1, 4, 2, 8];
console.log(`Initial array: [${myList}]`);

// Access (O(1))
console.log(`Element at index 2: ${myList[2]}`); // Output: 4

// Insertion (push at end - O(1) amortized)
myList.push(3);
console.log(`After pushing 3: [${myList}]`); // Output: [5, 1, 4, 2, 8, 3]

// Insertion (splice at specific index - O(n))
// splice(startIndex, deleteCount, item1, item2, ...)
myList.splice(1, 0, 99); // Insert 99 at index 1, delete 0 elements
console.log(`After inserting 99 at index 1: [${myList}]`); // Output: [5, 99, 1, 4, 2, 8, 3]

// Deletion (pop from end - O(1))
let lastElement = myList.pop();
console.log(`Popped last element (${lastElement}), array is now: [${myList}]`); // Output: [5, 99, 1, 4, 2, 8]

// Deletion (splice by index - O(n))
// Remove 1 element starting from index 1
let deletedElement = myList.splice(1, 1);
console.log(
  `After deleting element at index 1 (${deletedElement}), array is now: [${myList}]`
); // Output: [5, 1, 4, 2, 8]

// Deletion (Remove specific value - O(n))
// Find index first, then splice
let valueToRemove = 4;
let indexToRemove = myList.indexOf(valueToRemove);
if (indexToRemove > -1) {
  myList.splice(indexToRemove, 1);
}
console.log(`After removing 4: [${myList}]`); // Output: [5, 1, 2, 8]

console.log("-".repeat(25));

// --- 2. Linked Lists (Singly Linked List Implementation) ---

console.log("--- Linked List Examples ---");

class Node {
  /** Represents a single node in a linked list. */
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to the next node
  }
}

class LinkedList {
  /** Represents a singly linked list. */
  constructor() {
    this.head = null; // Head pointer, initially null
  }

  /** Check if the list is empty. */
  isEmpty() {
    return this.head === null;
  }

  /** Add a node with data to the end of the list (O(n) without tail pointer). */
  append(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }
    // Traverse to the last node
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode; // Link the last node to the new node
  }

  /** Add a node with data to the beginning of the list (O(1)). */
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  /** Search for a node with the target data (O(n)). Returns the node or null. */
  search(target) {
    let current = this.head;
    while (current) {
      if (current.data === target) {
        return current; // Or return true
      }
      current = current.next;
    }
    return null; // Or return false
  }

  /** Delete the first node containing the target data (O(n)). */
  delete(target) {
    if (this.isEmpty()) {
      console.log("List is empty, cannot delete.");
      return;
    }

    // If head node is the target
    if (this.head.data === target) {
      this.head = this.head.next;
      return;
    }

    // Search for the node *before* the target node
    let prev = this.head;
    let current = this.head.next;
    while (current) {
      if (current.data === target) {
        prev.next = current.next; // Unlink the target node
        return;
      }
      prev = current;
      current = current.next;
    }
    console.log(`Target ${target} not found in the list.`);
  }

  /** Print the elements of the list (O(n)). */
  display() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(String(current.data)); // Convert data to string for printing
      current = current.next;
    }
    console.log(elements.length > 0 ? elements.join(" -> ") : "List is empty");
  }
}

// Linked List Usage
const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.prepend(5);
console.log("Linked List:");
ll.display(); // Output: 5 -> 10 -> 20 -> 30

console.log(`Searching for 20: ${ll.search(20) ? "Found" : "Not Found"}`); // Output: Found
console.log(`Searching for 99: ${ll.search(99) ? "Found" : "Not Found"}`); // Output: Not Found

ll.delete(10);
console.log("After deleting 10:");
ll.display(); // Output: 5 -> 20 -> 30

ll.delete(5);
console.log("After deleting 5 (head):");
ll.display(); // Output: 20 -> 30

ll.delete(99); // Target not found message

console.log("-".repeat(25));

// --- 3. Sorting Algorithms ---

console.log("--- Sorting Algorithm Examples ---");
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(`Unsorted array: [${unsortedArray}]`);

// --- 3a. Bubble Sort (O(n^2) time, O(1) space) ---
function bubbleSort(arr) {
  const n = arr.length;
  let tempArr = [...arr]; // Create a copy to avoid modifying original
  for (let i = 0; i < n; i++) {
    let swapped = false; // Optimization
    for (let j = 0; j < n - i - 1; j++) {
      if (tempArr[j] > tempArr[j + 1]) {
        // Swap elements
        [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
        swapped = true;
      }
    }
    // If no two elements were swapped by inner loop, then break
    if (!swapped) break;
  }
  return tempArr;
}
let bubbleSorted = bubbleSort(unsortedArray);
console.log(`Bubble Sorted: [${bubbleSorted}]`);

// --- 3b. Merge Sort (O(n log n) time, O(n) space) ---
function mergeSort(arr) {
  const n = arr.length;
  // Base case: array of 0 or 1 elements is already sorted
  if (n <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(n / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively sort both halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller one to the merged array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left array
  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Add any remaining elements from the right array
  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}

let mergeSorted = mergeSort(unsortedArray);
console.log(`Merge Sorted:  [${mergeSorted}]`);

// --- 3c. Quick Sort (O(n log n) average time, O(n^2) worst time; O(log n) average space) ---
function quickSort(arr) {
  let tempArr = [...arr]; // Create a copy
  quickSortRecursive(tempArr, 0, tempArr.length - 1);
  return tempArr;
}

function quickSortRecursive(arr, low, high) {
  if (low < high) {
    // pi is partitioning index, arr[pi] is now at right place
    let pi = partition(arr, low, high);

    // Recursively sort elements before partition and after partition
    quickSortRecursive(arr, low, pi - 1);
    quickSortRecursive(arr, pi + 1, high);
  }
}

// This function takes last element as pivot, places the pivot element at its
// correct position in sorted array, and places all smaller (smaller than pivot)
// to left of pivot and all greater elements to right of pivot
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1; // index of smaller element
  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;
      // swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // swap arr[i+1] and arr[high] (or pivot)
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

let quickSorted = quickSort(unsortedArray);
console.log(`Quick Sorted:  [${quickSorted}]`);

console.log("-".repeat(25));

// --- 4. Searching Algorithms ---

console.log("--- Searching Algorithm Examples ---");
let searchArray = [11, 12, 22, 25, 34, 64, 90]; // Use a sorted array for Binary Search
let targetValue = 25;
console.log(`Array to search in: [${searchArray}]`);
console.log(`Target value: ${targetValue}`);

// --- 4a. Linear Search (O(n) time, O(1) space) ---
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index where target is found
    }
  }
  return -1; // Return -1 if target is not found
}

let linearIndex = linearSearch(searchArray, targetValue);
console.log(
  `Linear Search: Target ${targetValue} found at index ${linearIndex}`
);
let linearNotFound = linearSearch(searchArray, 99);
console.log(`Linear Search: Target 99 found at index ${linearNotFound}`);

// --- 4b. Binary Search (O(log n) time, O(1) iterative space / O(log n) recursive space) ---
// REQUIRES a SORTED array!
function binarySearchIterative(sortedArr, target) {
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = sortedArr[mid];

    if (guess === target) {
      return mid; // Target found
    } else if (guess > target) {
      high = mid - 1; // Target is in the lower half
    } else {
      low = mid + 1; // Target is in the upper half
    }
  }
  return -1; // Target not found
}

let binaryIndex = binarySearchIterative(searchArray, targetValue);
console.log(
  `Binary Search: Target ${targetValue} found at index ${binaryIndex}`
);
let binaryNotFound = binarySearchIterative(searchArray, 99);
console.log(`Binary Search: Target 99 found at index ${binaryNotFound}`);

console.log("-".repeat(25));
