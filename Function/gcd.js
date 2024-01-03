function GCD(a,b)
{
   if(b===0)
     return a;
   return GCD(b,a%b);
}
let res = GCD(5,10);
console.log(res);
