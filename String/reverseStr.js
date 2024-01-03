function reverseString(fName)
{
  
   if(fName.length<2 || fName==="")
   {
     return "Not valid";
   }
   let reverseStr = [];
   let lastIndex = fName.length -1;
   for(let i = lastIndex; i>=0;i--)
   {
     reverseStr.push(fName.charAt(i));
   }
   return reverseStr;
}
let res = reverseString("Mrityunjay Kumar Jha");
console.log(res);


