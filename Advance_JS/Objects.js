function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
multiplyBy5.base = 3;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
console.log(multiplyBy5.base);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
};
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25);
chai.printMe();
const tea = new createUser("tea", 250);
tea.printMe();

const {username, score} = new createUser("ice tea", 150);
console.log(`Price of ${username} is ${score}`);
