# JavaScript Week 3 — Practice Exercises

Matches the 9 topics from the teaching guide. Give the junior the **Exercises** section first — the **Answer Key** is at the bottom so it doesn't spoil anything while they work.

---

## 1. Functions

**1.1 —** Write a function `introduce(name, hobby)` where `hobby` defaults to `"coding"` if not given. Call it once with just a name, and once with both a name and a hobby.

**1.2 —** Predict the output *before* running this, then check:
```js
function double(n) {
  return n * 2;
}
console.log(double(5) + 1);
```

---

## 2. Function Declaration vs Expression

**2.1 —** Will this code work or throw an error? Explain why in one sentence.
```js
console.log(multiply(3, 4));
function multiply(a, b) {
  return a * b;
}
```

**2.2 —** This code is broken. Fix it with the smallest possible change (don't rewrite the whole thing):
```js
console.log(square(5));
const square = function (n) {
  return n * n;
};
```

---

## 3. Arrow Functions

**3.1 —** Rewrite this regular function as an arrow function, as short as possible:
```js
function triple(n) {
  return n * 3;
}
```

**3.2 —** This arrow function has a bug — it always returns `undefined`. Find and fix it:
```js
const add = (a, b) => {
  a + b;
};
```

---

## 4. Callback Functions

**4.1 —** Write a function `processOrder(item, callback)` that logs `"Processing: " + item`, then calls `callback`. Write a separate function `orderComplete()` that logs `"Order done!"`. Call `processOrder` passing `orderComplete` as the callback.

**4.2 —** Spot the bug in this code (don't just fix it — explain what's wrong first):
```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
function wave() {
  console.log("👋");
}
greet("Dara", wave());
```

---

## 5. Arrays — Declaring and Accessing

**5.1 —** Create an array called `snacks` with 4 items of your choice. Then log:
- the first item using its index
- the last item using `.at(-1)`
- the total number of items

**5.2 —** Predict the output:
```js
const colors = ["red", "green", "blue"];
console.log(colors[3]);
```

---

## 6. Arrays — Modifying (push, pop, shift, unshift)

**6.1 —** Start with `const queue = ["Alice", "Bob"];` and simulate a line at a coffee shop:
- `"Charlie"` joins the back of the line
- `"Dara"` joins the front (VIP!)
- the person at the front gets served and leaves the line
- log the final array

**6.2 —** Which method would you use to remove the *last* item added to an array? Which one *returns* the removed item?

---

## 7. Arrays — forEach, filter, map

**7.1 —** Given `const students = ["Smey", "Sovath", "Bora", "Chan"];`, use `forEach` to log `"Hello, <name>!"` for each one.

**7.2 —** Given `const scores = [45, 78, 62, 39, 91, 55];`, use `filter` to create a new array `passing` containing only scores of 50 or above.

**7.3 —** Given `const prices = [10, 20, 30];`, use `map` to create a new array `withTax` where each price has 10% added (e.g. `10` → `11`).

---

## 8. Objects — Creating, Getting, Adding, Deleting

**8.1 —** Create an object `student` with properties `name`, `age`, and `grade`. Then:
- log the student's `name`
- add a new property `school` with any value
- delete the `grade` property
- log the whole object at the end

---

## 9. Objects — Bracket Notation & for..in

**9.1 —** Create an object `car` with a property key `"top speed"` (two words!) set to any number. Try to read it with dot notation first (see what happens), then read it correctly with bracket notation.

**9.2 —** Given:
```js
const country = {
  name: "Cambodia",
  capital: "Phnom Penh",
  population: 17000000
};
```
Write a `for...in` loop that logs each key and its value, like:
```
name: Cambodia
capital: Phnom Penh
population: 17000000
```

---

## 🎯 Bonus Challenge (combines everything)

Given this array of objects:
```js
const users = [
  { name: "Smey", age: 22, isAdmin: true },
  { name: "Sovath", age: 19, isAdmin: false },
  { name: "Bora", age: 25, isAdmin: true }
];
```
1. Use `filter` to get only the admins into a new array called `admins`.
2. Use `forEach` (or `map`) to log each admin's name using a bracket-notation lookup: `user["name"]`.
3. Write a callback function `logUser(user)` that logs `"User: " + user.name`, and pass it into a `forEach` call over the whole `users` array.

---
---

