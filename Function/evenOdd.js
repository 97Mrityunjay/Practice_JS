function isEven(num)
{
   if((num & 1) === 0)
   {
     console.log(`${num} is an even number`);
   }
   else
   {
      console.log(`${num} is an odd number`);
   }
}
isEven(10);

