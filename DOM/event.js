
const myPElements=document.querySelectorAll('p');
myPElements.forEach(function(p){
    p.textContent=`I am changed using loops in JS`;
});
const myNewPara=document.createElement('p');
myNewPara.textContent=`I was added via JS`;
document.querySelector('body').appendChild(myNewPara);

