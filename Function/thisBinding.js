const mrityunjay = {
    firstName : "Mrityunjay",
    lastName : "Kumar Jha",
    role : "admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
         First name is ${this.firstName}
         Last name is ${this.lastName}
         His role is ${this.role}
         And he is studying ${this.courseCount} Courses
        `);
        // console.log(this);
    },

};
// fun(mrityunjay)
// function fun(props)
// {
//    props.getInfo();
//    console.log(props);
// }

const dj = {
    firstName : "Rocky",
    lastName : "DJ",
    role : "sub-admin",
    courseCount : 4,
};

// var djInfo = mrityunjay.getInfo.bind(dj);
// djInfo();

mrityunjay.getInfo.apply(dj);

const arr = []

function getName(name)
{
   console.log(`Full name is ${name}`)
}
// getName("Mrityunjay");

getName.call(arr,"Ajay");
getName.apply(arr,["Ajay"]);
let myName = getName.bind(arr,"Mrityunjay Kumar Jha");
console.log(myName);
myName();