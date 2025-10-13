const arr1 = [2, 4];
const arr2 = [5, 6];
const combine = [...arr1, ...arr2];
console.log(combine);


//combing object
const obj1 = { name: 'apple', color: 'red' };
const obj2 = { tase: "sweet" }
const merged = { ...obj1,..obj2 }
console.log(merged);
