// var isEven = (element)=>{
//      return element%2===0;
// }
// var result = isEven(2);
var result = [2,4,6,8,10].every((ele)=>{
     return ele%2===0;
});

console.log(result);
var res = [28,45,67,78,89].filter((ele)=>{
    return ele < 60;
});
console.log(res);
