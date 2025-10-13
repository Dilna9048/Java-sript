function parameter({ name, age }) {
    console.log(${name} is ${age} years old);
}
const person = {
    name: "Dilna",
    age: 31
};
parameter(person);