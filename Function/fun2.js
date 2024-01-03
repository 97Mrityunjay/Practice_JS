// Function statement aka function declaration
function a()
{
   console.log("a is called");
}

// Function expression
var b = function () {
    console.log("b is called");
}

/*Annonymous Function:
 -> Function without name is known as annonymous function. 
 
 -> Annonymous function does not have their own identity , that means if we create Annonymous function like function(){} , this will result out a syntax error because Annonymous function looks like a function statement, but it has no name, but according to ECMASCRIPT specification a function statement should always have a name. so this is an invalid syntax*/

/*function(){
}

It gives syntax error:  Function statements requires a function name
 */

/* Annonymous function are used in a place where functions are used as a value */

/* Named Function expression
-> A Named function expression is like exactly the same as the function expression like var a= function(){}, but instead of using  the annonymous function here, we use function with a name 
*/
var c = function xyz(){
    console.log(xyz);
}

c(); 

// xyz(); /*It gives Reference error : xyz is not defined as if we use function xyz() as a value, so in this case this xyz is not created in outer scope. so this xyz is not a function inside  outer scope or inside global scope, but it is created as a local variable, that means when we want to access the function xyz() inside function xyz() we can access it  */

/* Difference between parameters and arguments
 The values that are passed inside a function, are  called as arguments.

 Identifiers that gets those values are known as parameters 

 parameter variables are used to import arguments into functions.

*/

var b1 = function(param1 , param2){ 
    // here param1 and param2 are parameters that receives values passed at the time of function call
    console.log("b1 is called");
}
b1(1,2) // 1 and 2 are arguments 


/* First class Function
-> Functions are first class citizens in Javascript, because of:
-> The ability of functions to be assigned as a value to a variable and can be passed as an argument to another function and can be returned by another function  
*/

function x(callback)
{
    console.log("x called");
    callback();
}
x(function y(){
    console.log("y called");
})