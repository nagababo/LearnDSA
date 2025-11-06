
function largestNumber(arr){
    if (arr.length < 0) return undefined;
    let largest = arr[0]
    for(let i=1; i< arr.length;i++){
        if(arr[i]> largest){
            largest= arr[i];
        }
    }
    return largest;
}


// Example inputs
const input1 = [0, 1, 2, 4];
const input2 = [3, 0, 1];
const input3 = [];


// 🧾 Print output
console.log("Input:", input1);
console.log("Largest Number:", largestNumber(input1));

console.log("\nInput:", input2);
console.log("largestNumber:", largestNumber(input2));
console.log("\nInput:", input3);
console.log("largestNumber:", largestNumber(input3));