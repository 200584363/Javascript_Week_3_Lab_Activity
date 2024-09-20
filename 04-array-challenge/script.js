// Challenge 1 Solution
// Methods that can mutate the following array to =

const arr = [1, 2, 3, 4, 5];

arr.reverse(); // reverse the array using the `reverse()` method
arr.push(0); // add 0 to the end of the array using the `concat()` method

// using "for" loop increment each element by 1
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 1;
}
console.log("Array-Challenge-1");
console.log(arr); // [6, 5, 4, 3, 2, 1, 0]

/*-------------------------------------------------------------*/

// Challenge 2 Solution
// Combine "arr1" and "arr2" int new array called "arr3"

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = arr1.concat(arr2); // using concat() method
console.log("Array-Challenge-2");
console.log(arr3); // displaying on console

