// Practice Challenge

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