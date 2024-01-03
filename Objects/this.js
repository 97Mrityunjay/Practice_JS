console.log(this);
const users = {
    firstName : "Mrityunjay",
    lastName : "Jha",
    courseCount : 42,
    getCourseCount : function(){
        console.log("Line 7",this);
        function sayHello()
        {
           console.log("Line 10",this);
        }
        sayHello();
    },
};
// console.log();
// users.getCourseCount();
const {getCourseCount} = users;
getCourseCount();
const user = {
    fullName : {
        firstName : "Mrityunjay",
        lastName : "Kumar Jha"
    },
    courseCount : 5,
    getInfo : function(){
        console.log(`${this.fullName.firstName} ${this.fullName.lastName} is enrolled in ${this.courseCount} courses`);
    },
};
user.getInfo();
