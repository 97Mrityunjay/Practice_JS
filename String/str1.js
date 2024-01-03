// var exp = "()[]{}";
// console.log(exp[1]);
var hayStack="sadbutsad";
var needle="sad";
let count =0;
let result;

var strstr = function(hayStack, needle){
      for(let i=0;i<hayStack.length;i++)
      {
         if(hayStack.substring(i).length<needle.length)
         {
            return -1;
         }
          count=0;
          result=i;
          for(let j=0;j<needle.length;j++)
          {
            if(hayStack[i+j]===needle[j])
            {
        
              count++;
           }
           else{
            break;
            }
        }
       if(count===needle.length)
       {
        return result;
       }
}
return -1;
};
let res=strstr(hayStack,needle);
console.log(res);