class User{
    constructor(name, email){
       this.name = name;
       this.email = email;
      
    }
    // # => private props getters setters
    #courseList = []; 
    getInfo(){
        return {name : this.name, email: this.email}; 
     }
    enrollCourse(name){
       this.#courseList.push(name);
    }
    getCourseList(){
        // console.log(this);
        return this.#courseList;
    }
    login()
    {
        return "You are logged in";
    }
}
class Subadmin extends User{
    constructor(name,email)
    {
        super(name,email);
    }
    getAdminInfo()
    {
        return "You are subadmin";
    }
    login()
    {
        return "Login by subadmin";
    }
}
// let users = new User("Mrityunjay", "mritunjayku99@gmail.com");
// console.log(users);
// users.enrollCourse("React JS Course");
// users.enrollCourse("Angular Course");
// console.log(users.getCourseList());
module.exports = Subadmin;
const rock = new User("rock", "rock@gmail.com");
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getInfo());
console.log(rock.getCourseList());
console.log(rock.courseList);

const tom = new Subadmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
