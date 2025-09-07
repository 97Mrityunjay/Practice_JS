const obj={
    firstName:"Mrityunjay",
    lastName:"Jha"
}
let printFullName = function(homeTown,state){
    console.log(this);
    console.log(`${this.firstName} ${this.lastName} from ${homeTown} , ${state}`);
}
const obj1={
    firstName:"Ajay",
    lastName:"Pandey"
}

printFullName.call(obj,"Muzaffarpur","Bihar");
printFullName.call(obj1,"Varanasi","Uttar Pradesh");