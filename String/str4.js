let str = "Mrityunjay";
console.log(str.toLocaleLowerCase()); //output: "mrityunjay"
console.log(str); //output: "Mrityunjay"
console.log(str.length);
console.log(str.endsWith("jay"));
console.log(str.charCodeAt(0));
console.log(str.concat(" Kumar Jha"));
/*includes method returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false. */
console.log(str.includes("rit",0));

/* Returns a String value that is made from count copies appended together. 
   If count is 0, the empty string is returned. */
console.log(str.repeat(3));

let fName = "Mrityunjay Kumar Jha".split(" ");
console.log(fName);
let fullName = fName.toString();
console.log(fullName.replace("," ," ").replace("," , " "));