// 1. Create an array of 5 fruits
let fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

// Print first and last elements using indexing
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 2. Add "Mango" to the end using push() and "Kiwi" to the start using unshift()
fruits.push("Mango");
fruits.unshift("Kiwi");
console.log("After push & unshift:", fruits);

// 3. Remove first and last elements using shift() and pop()
fruits.shift();
fruits.pop();
console.log("After shift & pop:", fruits);

// 4. Find length of array without using .length
let count = 0;
for (let _ of fruits) {
  count++;
}
console.log("Array length (without .length):", count);

// 5. Use indexOf() to find position of "Banana"
let bananaIndex = fruits.indexOf("Banana");
console.log("Position of Banana:", bananaIndex);

// 6. Use includes() to check if "Orange" exists
let hasOrange = fruits.includes("Orange");
console.log("Orange exists:", hasOrange);

// 7. Convert [1,2,3,4,5] into string separated by "-"
let numbers = [1, 2, 3, 4, 5];
let joined = numbers.join("-");
console.log("Joined string:", joined);

// 8. Remove duplicates from [1,2,3,2,1,4,5]
let arr = [1, 2, 3, 2, 1, 4, 5];
let unique = [...new Set(arr)];
console.log("Without duplicates:", unique);

// 9. Return the string with the longest length
let words = ["React", "Node", "MongoDB"];
let longest = words[0];

for (let word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}
console.log("Longest string:", longest);

// 10. Create new array with length of each string
let lengths = words.map(word => word.length);
console.log("String lengths:", lengths);

// 11. Convert [1,2,3,4,5] → [5,10,15,20,25]
let multiplied = numbers.map(num => num * 5);
console.log("Multiplied array:", multiplied);

// 12. Replace all negative numbers with 0
let values = [4, -2, 6, -9, 7];
let updated = values.map(num => num < 0 ? 0 : num);
console.log("Updated array:", updated);