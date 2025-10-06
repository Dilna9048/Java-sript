//in js 
//asyvc await symyhacic  sugar bilid of toke of promise it mades asncronous code loops an beavieor syncronous
//moer readable and maintable

//async mark afunction that wiil return a promise

//await - processive function exxcution untill a promises resolved (or reject)

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded")

        }, 2000)
    })
}
async function getData() {     //asnyc wait code
    console.log("start");

    const result = await fetchData();
    console.log(result);

    console.log("end");



}
getData();


