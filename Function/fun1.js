sum(10,20);
diff(10,20); //Error: cannot access diff before initialization 
function sum(x,y)
{
    return x+y;
}
let diff = function (x,y){
  return x-y;
};
