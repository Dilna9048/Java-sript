let numbers = [10, 20, 30, 40, 50];

// Copy elements starting from index 3 into index 0
numbers.copyWithin(0, 3);

console.log(numbers);  
// Output: [40, 50, 30, 40, 50]
