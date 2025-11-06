// index.js
import { execSync } from "child_process";
import path from "path";

const args = process.argv.slice(2);
const topic = args[0]; // e.g. "arrays"
const file = args[1];  // e.g. "missingNumber.js"

if (!topic || !file) {
  console.log("Usage: node index.js <topic> <file>");
  console.log("Example: node index.js arrays missingNumber.js");
  process.exit(1);
}

const filePath = path.resolve(`./${topic}/${file}`);
console.log(`🚀 Running: ${filePath}\n`);

execSync(`node ${filePath}`, { stdio: "inherit" });
