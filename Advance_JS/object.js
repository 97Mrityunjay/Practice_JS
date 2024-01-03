// import "./classJs.js";
// const User = require("./classJs");
const Subadmin = require("./classJs");
const mrityunjay = new Subadmin("Mrityunjay", "mritunjayku99@gmail.com");
mrityunjay.enrollCourse("React JS Bootcamp");
mrityunjay.enrollCourse("Complete Angular Developer Bootcamp");
console.log(mrityunjay.getInfo());
console.log(mrityunjay.getCourseList());
