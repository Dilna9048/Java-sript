let arr = [1, 2, 3];

// Map each element, then flatten the result
let result = arr.flatMap(num => [num, num * 2]);

console.log(result);  
// Output: [1, 2, 2, 4, 3, 6]

console.log(arr);  
// Output: [1, 2, 3]  (original not changed)
