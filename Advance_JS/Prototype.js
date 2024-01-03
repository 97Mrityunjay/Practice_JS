// let myName = "mrityunjay     ";
// console.log(myName.trueLength); 

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hamer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mrityunjay = function(){
    console.log(`mrityunjay is present in all objects`);
}
Array.prototype.heyMrityunjay = function(){
    console.log(`Mrityunjay says hello`);
}
// heroPower.mrityunjay();
myHeros.mrityunjay();
myHeros.heyMrityunjay();
// heroPower.heyMrityunjay();

// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ =User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode     ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"mrityunjay".trueLength();
"icetea   ".trueLength();