const name={
    firstName:"Ajay",
    lastName:"Pandey"
}
let printFullName = function(homeTown,state){
    console.log(`${this.firstName} ${this.lastName} from ${homeTown},${state}`);
}

const name1={
    firstName:"Akshay",
    lastName:"Saini"
}

printFullName.apply(name1,["Dehradun","Uttarakhand"]);
