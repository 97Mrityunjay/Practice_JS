const mySym = Symbol("Key1");
// console.log(mySym);

const JSUser = {
    name : "Mrityunjay",
    "full name" : "Mrityunjay Kumar Jha",
    [mySym] : "myKey1",
    age : 26,
    location : "Muzaffarpur",
    email : "mritunjayku99@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
};
console.log(JSUser);
console.log(JSUser["full name"]);
console.log(JSUser["email"]);
// Object.freeze(JSUser); 
/*freeze method prevents the modification of existing property attributes and values, and prevents the addition of new properties.*/
JSUser.isLoggedIn = true;
console.log(JSUser.isLoggedIn);
console.log();
console.log();