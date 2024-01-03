var x =1;
a();
b();
console.log(x);
function a(){
    var x = 10;
    console.log(x);
}

function b()
{
    var x = 100;
    console.log(x);
}

let arr = [3,4,5,6,7];
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(8,14));
console.log(arr);
let arr1 = arr.concat(...[9,10,11,12,13])
console.log(arr1);
console.log(...[3,6,8,9]);
// const [num1,num2,num3,...rest] = [2,5,6,...[7,8,9,10]];
const [num1,num2,num3,...rest] = [2,5,6,[7,8,9,10],[11,12,13]];
console.log(rest[0]);
console.log(rest);