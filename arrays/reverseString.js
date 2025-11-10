/*Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.

Examples:
Example 1:
Input:s = [“h”,”e”,”l”,”l”,”o”]

Output:[“o”,”l”,”l”,”e”,”h”]

Example 2:
Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]

Output:[“h”,”a”,”n”,”n”,”a”,”H”]*/

const reverseString= function(s){
    let len = s.length;
    let halflen = Math.floor(s.length/2)
    for(let i= 0; i< halflen;i++){
        let temp = s[i]
        s[i]=s[len - i -1];
        s[len - i -1] = temp
    }
}
const Input1 = ['H','e','l','l','o']

console.log("Input:", Input1);
 reverseString(Input1)
console.log("output:", Input1);
