var myMap = new Map();
/*set method adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.*/
myMap.set(1,"uno");
myMap.set(2,"dos");
myMap.set(3,"Tres");
myMap.set(4,"Cuatro");
console.log(myMap);
for(let key of myMap.keys())
{
  console.log(`key is ${key}`);
}
for(let [key,value] of myMap)
{
    console.log(`key is ${key} and value is ${value}`);
}
/* forEach executes provided function once per each key/value pair in the map in insertion order*/
myMap.forEach((v,k)=>console.log(`${v} and key is ${k}`));
/* delete function returns true if an element in map existed and has been removed or false if element doesn't exists*/
myMap.delete(2);
console.log(myMap);

// [3,4,6].find()


/* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. map() method returns a new array with each element being the result of callback function. The map() method is an iterative method. It calls a provided callback function once for each element in an array and constructs a new array from the results. callback function is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.*/

/*syntax: map(callbackFn);
  map(callbackFn, thisArg);
  thisArg is optional*/

const array1 = [3,4,7,8];
const map1 = array1.map((x)=>{return(x*2)}); //const map1 = array1.map(x=>x*2);
console.log(map1);
const map2 = array1.map((val,key)=>(`key is ${key} and value is ${val} `));
console.log(map2);
const map3 = array1.map((val,key)=>{return key}) ;
console.log(map3);


