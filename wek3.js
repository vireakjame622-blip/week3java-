// ==========================================
// JavaScript Week 3 — Practice Exercises
// ==========================================

// --- 1. Functions ---
console.log("=== 1. Functions ===");
// 1.1: Function with default parameter
function introduce(name, hobby = "coding") {
  console.log(`Hi, my name is ${name} and my hobby is ${hobby}.`);
}
introduce("JAME");
introduce("NIZA", "photography");
// 1.2: Prediction Output: 11
function double(n) {
  return n * 2;
}
console.log("Output:", double(5) + 1); // 11
// --- 2. Function Declaration vs Expression ---
console.log("\n=== 2. Function Declaration vs Expression ===");
// 2.1: Works because of function declaration hoisting
console.log("Output:", multiply(3, 4)); // 12
function multiply(a, b) {
  return a * b;
}
// 2.2: Fixed by declaring the function expression before calling it
const square = function (n) {
  return n * n;
};
console.log("Output:", square(5)); // 25
// --- 3. Arrow Functions ---
console.log("\n=== 3. Arrow Functions ===");
// 3.1: Shortest arrow function
const triple = (n) => n * 3;
console.log("Output:", triple(4)); // 12
// 3.2: Fixed arrow function (implicit return without braces or explicit return)
const add = (a, b) => a + b;
console.log("Output:", add(5, 7)); // 12

// --- 4. Callback Functions ---
console.log("\n=== 4. Callback Functions ===");

// 4.1: processOrder with callback
function processOrder(item, callback) {
  console.log("Processing: " + item);
  callback();
}
function orderComplete() {
  console.log("Order done!");
}
processOrder("Iced Latte", orderComplete);
// 4.2: Fixed greet callback (pass function reference without parentheses)
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
function wave() {
  console.log("👋");
}
greet("Dara", wave); // Pass wave, not wave()
// --- 5. Arrays — Declaring and Accessing ---
console.log("\n=== 5. Arrays — Declaring and Accessing ===");
// 5.1: snacks array
const snacks = ["Chips", "Cookies", "Nuts", "Chocolate"];
console.log("First item:", snacks[0]);
console.log("Last item:", snacks.at(-1));
console.log("Total items:", snacks.length);
// 5.2: Output prediction: undefined
const colors = ["red", "green", "blue"];
console.log("5.2 Output:", colors[3]); // undefined
// --- 6. Arrays — Modifying (push, pop, shift, unshift) ---
console.log("\n=== 6. Arrays — Modifying ===");
// 6.1: Queue simulation
const queue = ["Alice", "Bob"];
queue.push("Charlie"); // Charlie joins back
queue.unshift("Dara"); // Dara joins front (VIP)
queue.shift(); // Dara gets served and leaves
console.log("Final queue:", queue); // ["Alice", "Bob", "Charlie"]
// 6.2: pop() removes and returns the last item
// --- 7. Arrays — forEach, filter, map ---
console.log("\n=== 7. Arrays — forEach, filter, map ===");
// 7.1: forEach
const students = ["Smey", "Sovath", "Bora", "Chan"];
students.forEach((student) => {
  console.log(`Hello, ${student}!`);
});
// 7.2: filter
const scores = [45, 78, 62, 39, 91, 55];
const passing = scores.filter((score) => score >= 50);
console.log("Passing scores:", passing); // [78, 62, 91, 55]
// 7.3: map (add 10% tax)
const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.1);
console.log("Prices with tax:", withTax); // [11, 22, 33]
// --- 8. Objects — Creating, Getting, Adding, Deleting ---
console.log("\n=== 8. Objects — Creating, Getting, Adding, Deleting ===");
// 8.1: Student object
const student = {
  name: "Sophea",
  age: 20,
  grade: "A",
};
console.log("Student Name:", student.name);
student.school = "CADT";
delete student.grade;
console.log("Updated Student Object:", student);
// --- 9. Objects — Bracket Notation & for..in ---
console.log("\n=== 9. Objects — Bracket Notation & for..in ===");
// 9.1: Bracket notation for property names with spaces
const car = {
  "top speed": 220,
};
// car.top speed would cause a SyntaxError
console.log("Car top speed:", car["top speed"]); // 220
// 9.2: for...in loop
const country = {
  name: "Cambodia",
  capital: "Phnom Penh",
  population: 17000000,
};
for (const key in country) {
  console.log(`${key}: ${country[key]}`);
}
// --- 🎯 Bonus Challenge (Easy & Clear Version) ---
console.log("\n=== 🎯 Bonus Challenge ===");
const users = [
  { name: "Smey", age: 22, isAdmin: true },
  { name: "Sovath", age: 19, isAdmin: false },
  { name: "Bora", age: 25, isAdmin: true },
];
function checkIsAdmin(user) {
  return user.isAdmin === true;
}
const admins = users.filter(checkIsAdmin);
console.log("Admins:", admins);
function printAdminName(user) {
  console.log("Admin name:", user["name"]);
}
admins.forEach(printAdminName);
function logUser(user) {
  console.log("User: " + user.name);
}
users.forEach(logUser);
