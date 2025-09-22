const numbers = [1, 2, 3, 4];

const sum = numbers.reduceRight((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 10
