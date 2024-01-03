const tinderUser = {};
tinderUser.id ="123abc";
tinderUser.name = "Ajay",
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email : "mritunjayku99@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Mrityunjay",
            lastName : "Kumar Jha",
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {"1": "a", "2": "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3 = Object.assign({},obj1,obj2,{5: "e", 6: "f"});
const obj3 = {...obj1, ...obj2};
console.log(obj3);
// console.log(obj1);

const {name:fullName, email} = {"name": "mrityunjay kumar jha", "email": "mritunjayku99@gmail.com"};
console.log(fullName);
console.log(email);

const {"1":one, "2":two} = obj1;
console.log(one);
console.log(two);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));