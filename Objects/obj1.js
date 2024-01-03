const user = {
    firstName : "Mrityunjay Kumar",
    lastName : "Jha",
    role : "user",
    loginCount : 36,
    isFacebookLoggedIn : true
};

console.log(user);
// console.log(user.firstName);
console.log(user["firstName"]);
// user["loginCount"]=42;
user.loginCount = 42;
console.log(user);