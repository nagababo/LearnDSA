// 🧩 Problem: <Write your problem name here>
// 📝 Description: <Briefly explain the problem here>

// Example:
// 🧩 Problem: Find the missing number in array [0..n]
// 📝 Description: Given an array containing n distinct numbers from 0 to n, find the missing number.

// --------------------------------------------------

function solve(input) {
  // ✏️ Write your logic here

  
}

// --------------------------------------------------
// 🧠 Test Cases
const tests = [
  { input: [0, 1, 2, 4], expected: 3 },
  { input: [3, 0, 1], expected: 2 },
  { input: [0, 1], expected: 2 },
];

// --------------------------------------------------
// 🚀 Test Runner
console.log("🧪 Running Tests...\n");

tests.forEach((test, index) => {
  const result = solve(test.input);
  const pass = result === test.expected;
  console.log(
    pass
      ? `✅ Test ${index + 1} Passed | Input: ${JSON.stringify(test.input)} | Output: ${result}`
      : `❌ Test ${index + 1} Failed | Input: ${JSON.stringify(test.input)} | Expected: ${test.expected}, Got: ${result}`
  );
});

console.log("\n✅ All tests completed.");
