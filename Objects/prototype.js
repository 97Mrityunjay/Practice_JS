/*Every object in Javascript has a hidden property called "Prototype". The value of this property can be null or a reference to another object.*/ 

/* Prototype chaining is a mechanism in JavaScript that allows objects to inherit properties and methods from their prototypes. When a property or method is accessed on an object, JavaScript first looks for that property or method on the object itself. If the property or method is not found on the object, it then looks for it on the object's prototype. If the property or method is not found on the prototype, it continues to look up the prototype chain until it reaches the end of the chain.  */
const loggedInStatus = {
    isLoggedIn : true
}
const admin = {
    isAdmin: true,
    __proto__: loggedInStatus,
    showData(){
      console.log("admin fun");
    }
}
const user = {
  fullName: "Mrityunjay Kumar Jha",
  role: "student",
  __proto__: admin,
  showData(){
    console.log("show data");
  }
}

user.showData();
console.log(user.__proto__);
console.log(user.__proto__.toString()); // output: [object Object]

console.log(user.isLoggedIn);



class User{
    static id = 0;
    constructor(name){
       this.name = name;
       User.id++;
    }
    static fun(){
        console.log("fun is called");
    }
}
const userOne = new User("Mrityunjay");
console.log(userOne);
console.log(User.id);
User.fun();