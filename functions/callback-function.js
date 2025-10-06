//call back fun are function that are passed to passed as arrquments there other function
//sycronus  line by line excute
//1 ascronous opertions
//2 a void blocking code expression

//this is our call back function

function greetUser(name){
    console.log(`hello,${name}!`)
}
//this function takes another function (callback) as an arrqument
function greetUserInput(callback){
    const name = "Dilna" ;//simulaing user input
    callback(name)
}
greetUserInput(greetUser);
