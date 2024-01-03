var user = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getcourseCount = function(){
        console.log(`course counted is ${this.courseCount}`);
    };
};
user.prototype.getfirstName=()=>{
    console.log(`Your firstName is ${this.firstName}`);
}
var mrityunjay = new user("mrityunjay", 2);
console.log(mrityunjay);
mrityunjay.getfirstName();
// mrityunjay.getcourseCount();
var samy = new user("samy",1);
console.log(samy);
samy.getfirstName();

