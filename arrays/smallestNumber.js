
function smallestNumber(arr){
    if (arr.length < 0) return undefined;
    let smallest = arr[0]
    for(let i=1; i< arr.length;i++){
        if(arr[i]< smallest){
            smallest= arr[i];
        }
    }
    return smallest;
}


// Example inputs
const input1 = [0, 1, 2, 4];
const input2 = [3, 0, 1];
const input3 = [];


// 🧾 Print output
console.log("Input:", input1);
console.log("Smallest Number:", smallestNumber(input1));

console.log("\nInput:", input2);
console.log("smallestNumber:", smallestNumber(input2));
console.log("\nInput:", input3);
console.log("smallestNumber:", smallestNumber(input3));