const counter = document.querySelector(".counter");
const followers = document.querySelector(".followers");
// counter.innerHTML=1000;
let count = 0;
setInterval(()=>{
    if(count<1000)
    {
        count++;
        counter.innerHTML=count;
    }
},1);

setTimeout(()=>{
 followers.innerText=`Followers in Instagram!`
},7000)
