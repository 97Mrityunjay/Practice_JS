const user = {
    firstName : "Mrityunjay Kumar",
    lastName : "Jha",
    role : "user",
    loginCount : 42,
    isFacebookLoggedIn : true,
    courseList : [],
    buyCourse: function(courseName){
      
         this.courseList.push(courseName);
         console.log(this.courseList);
    },
    getcourseCount : function(){
           return `${this.firstName} ${this.lastName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function(){
       return {
         firstName : this.firstName,
         lastName : this.lastName,
         role : this.role,
         loginCount : this.loginCount,
         isFacebookLoggedIn : this.isFacebookLoggedIn,
         courseList : this.courseList,
         totalCourseCount : this.courseList.length, 
       }
    },

};
console.log(this);
console.log(user.getcourseCount());
user.buyCourse("React Js Course");
console.log(user.getcourseCount());
user.buyCourse("Angular");
console.log(user.getcourseCount());
console.log(user.info());