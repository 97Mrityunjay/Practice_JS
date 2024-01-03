function gcd(a,b)
{
    if(b===0)
       return a;
    return gcd(b,a%b);
}

function LCM(a,b)
{
   let GCD = gcd(a,b);
   return `LCM of ${a} and ${b} is ${(a*b)/GCD}`;
}
let res = LCM(4,6);
console.log(res);
