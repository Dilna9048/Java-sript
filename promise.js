//promise in js is an object that repersentive ivation completion (or fail)of aascronous operation an resulting value
//const promise= new Promise(resolve,reject)=>{
    //asyncronous operation
//}

//resolve(value)- called when the operation is succesful
//reject (error)-call when the operation is fail


//create promise

let myPromise= new Promise((resolve,reject)=>{
    let success = false;

    setTimeout(()=>{
        if(success){
            resolve("promise resolved successfully")
        }
        else{
            reject("promise rejected")
        }
    },2000)
})
myPromise
.then(result=>console.log(result))//then peomise is resolved
.catch(error=>console.log(error))//catch promise is rejected
.finally(()=>console.log("promise excecutin finished"))//promise excecution finished



