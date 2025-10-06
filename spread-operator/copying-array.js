const arr1 = [1, 2, 3];
const arr2 = [...arr1]
console.log(arr2);


//coping object



const object1 = {
    color: "red",
    color2: "yellow",

};
const object2 = {
    ...object1
}
console.log(object2);