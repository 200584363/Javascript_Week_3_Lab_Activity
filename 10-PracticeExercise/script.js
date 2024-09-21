// Practice Challenge

// Calculate the average marks of students
let studentMarks = [85, 97, 44, 37, 37, 76, 60];
let totalMarks = 0;

// Add up all the marks
for (let mark of studentMarks) {
  totalMarks += mark;
}

// Calculate average
let averageMarks = totalMarks / studentMarks.length;
console.log(averageMarks.toFixed(2)); // Print average rounded to 2 decimal places

// Apply a 10% discount to item prices
let itemPrices = [250, 645, 300, 900, 50];
let discountedPrices = [];

// Subtract 10% from each price
for (let price of itemPrices) {
  let discount = price * 0.1;
  discountedPrices.push(price - discount);
}

console.log(discountedPrices); // Print new prices with discount applied

// 3rd Solution
const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//a
let a = companies.concat();
a.shift();
console.log(a);

// b

let b = companies.concat();
b.splice(1,1, "Ola");
console.log(b);

// c
let c = companies;
c.push("Amazon");
console.log(c);
