function findSecondLargest(arr){

    if(arr.length < 2) return "array should have at least two elements"
    let first = -Infinity
    let second = -Infinity
    for(let num of arr){
        if(num > first){
            second = first;
            first = num
        }else if(num > second && num < first)
        {
            second = num
        } 
    }

    return second === -Infinity ? null : second

}


// Example inputs
const input1 = [10,15,20,20,8];
const input2 = [10, 10, 10];
const input3 = [];


// 🧾 Print output
console.log("Input:", input1);
console.log("second larges:", findSecondLargest(input1));

console.log("\nInput:", input2);
console.log("secon largest:", findSecondLargest(input2));
console.log("\nInput:", input3);
console.log("second largest:", findSecondLargest(input3));