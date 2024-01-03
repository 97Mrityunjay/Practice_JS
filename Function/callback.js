/* What is callback function in Javascript
 -> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

 -> we call callback function sometimes else in our code. Callback function is called back sometimes later in our code, so that's why it is called callback function. For example we pass function y into another function x as an argument, then it is up to x when it wants to call this function y; 
*/
// setTimeout(function() {
//     console.log("timer");
// }, 5000);

// function x(y)
// {
//   console.log("x called");
//   y();
// }

// x(function y(){
//   console.log("y called");
// })

//
let count = 0;
document.getElementById("clickMe").onclick = ()=>{
  console.log("button clicked",++count);
}


