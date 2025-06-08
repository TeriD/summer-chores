# 🧹 Summer-Chores Part 1

This Code:You Module 3 Callback Assignment simulates a person completing summer chores with a chance of dozing off between tasks. This assignment helps demonstrate callback chaining, timing with `setTimeout`, and control flow in asynchronous JavaScript.

## Promise-Based Refactor

In this second version of the summer chores simulation, the original callback-based functions have been refactored using JavaScript Promises. Each asynchronous task (e.g., mowing, weed eating, etc.) now returns a Promise that resolves upon successful completion or rejects if the individual "falls asleep" mid-task (simulated with a random chance).

The `doSummerChores` function chains these promises, allowing for more readable and maintainable code compared to deeply nested callbacks.

## Async/Await Version

This version of the summer chores simulation refactors the original callback and Promise-based versions using `async/await`. This provides a cleaner, more readable structure for handling asynchronous tasks.

Each chore function returns a Promise, and `doSummerChores` is now an `async` function that awaits the completion of each chore in order. Errors are handled using a `try...catch` block, which ensures that any failure (e.g., falling asleep mid-task) is caught and reported gracefully.


## 📝 Description

Every Saturday, someone (like Joe) attempts to complete a set of summer chores. They follow a strict order of tasks, and while some are completed successfully, there's always a chance they might fall asleep from exhaustion along the way!

### Chores (in order):
1. Mow the yard (2 seconds, never falls asleep)
2. Weed eat (1.5 seconds)
3. Trim the hedges (1 second)
4. Collect firewood (2.5 seconds)
5. Water the garden (0.5 seconds)

Each chore (except mowing) has a **30% chance** of the person falling asleep and ending their work for the day.

---

## 🚀 How to Run - Original Callback task
```bash
node callbackVersion.js

## 🚀 How to Run - Promise Version
```bash
node promiseVersion.js

## 🚀 How to Run - AsyncAwait Version
```bash
node promiseVersion.js
