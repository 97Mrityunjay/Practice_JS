const name = "Mrityunjay";
const repCount = 10;
console.log(`Hello my name is ${name} and my repo count is ${repCount}`);
// console.log(name.charAt(2));
// console.log(name.indexOf("y"));
// console.log(typeof name);
const gameName = new String('mrityunjaymj');
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.substring(0,3));
var userName = " mrityunjay ";
// console.log(userName);
// console.log(userName.trim());
// console.log(gameName.indexOf('r'));
console.log(gameName.blink());
console.log(gameName.bold());
console.log(gameName.big());
console.log(gameName.charCodeAt(1));
// console.log(gameName.codePointAt(0));
const anotherString = gameName.slice(0,2);
console.log(anotherString);
const lastName =  "Jha";
console.log("Mrityunjay ".concat(lastName));
console.log(gameName.includes("mri"));;
console.log(name.endsWith("jay"));
// let num = 10;
// let str4 = num.toString();
// console.log(str4+10);
// console.log(Number(str4)+10);
let str5 = "Ajay";
let str6 = str5.replace("A","a");
// console.log(str5);
console.log(str6);
const url = "https://mrityunjay.com/mrityunjay%20jha";
console.log(url);
console.log(url.replace("%20","-"));
console.log(url.includes("mrityunjay"));
console.log(url.includes("hitesh"));
let gameName2 = "mrityunjay-mkj-mj"
console.log(gameName2.split("-",2));
console.log(gameName2.split("-",3));
// console.log(Array.from("mrityunjay"))