function removeDuplicates(nums){

    if(nums.length ===0) return 0
    let x = 0;

    for(let i = 1;i <nums.length; i++){
        if(nums[i] > nums[x]){
            x = x+1
            nums[x]= nums[i]
        }
    }
    return x+1

}

// Example inputs
const input1 = [1,1,2,3,3,5];


console.log("Input:", input1);
console.log("uniqelements", removeDuplicates(input1));
