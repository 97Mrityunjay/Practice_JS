const name2 = {
    firstName:"Hitesh",
    lastName:"Chaudhary"
};

let printFullName = function(homeTown,state){
    console.log(this);
    console.log(`${this.firstName} ${this.lastName} from ${homeTown},${state}`);
}

const name3 = {
    firstName:"Saurabh",
    lastName:"Shukla"
};

let printName = printFullName.bind(name2,"Jaipur","Rajasthan");
console.log(printName);
printName();