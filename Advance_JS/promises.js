const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve();
    }, 1000);
    
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async task 2`);
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000)
})

promiseThree.then(function(user){
     console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: "mrityunjay", password: 123})
        }
        else{
            reject("Error: something went wrong");
        }
    }, 1000)

})

// const userName = promiseFour.then((user)=>{
//     console.log(user.userName);
//     return user.userName
// })
// console.log(userName); //It gives error as we have not handled rejection of promise using catch

promiseFour.then((user) =>{
   console.log(user);
   return user.userName
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        let error = true;
        if(!error){
            response({userName: "JS", password: 123});
        }
        else{
            reject("Error: JS went wrong");
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive;
    console.log(response);

   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive();


async function getAllUsers(){

   try{
    const response = await fetch("https://api.github.com/users/97Mrityunjay");
    const data = await response.json();
    console.log(data);
   } catch(error) {
      console.log("Error:"+ error);
   }
}

// getAllUsers();

fetch("https://api.github.com/users/97Mrityunjay")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})