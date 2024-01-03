const user = {
    username: "mrityunjay",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
user.getUserDetails();
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("mrityunjay", 12, true);
const userTwo = new User("mrityunjay kumar jha", 11, false);
console.log(userOne);

console.log(userTwo);
