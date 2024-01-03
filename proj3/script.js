const courses = [
    {
      name: "Complete React JS Course",
      price : "2.2",
    },
    {
      name : "Complete Angular Course",
      price : "2.3",
    },
    {
      name : "Complete C++ Course",
      price : "2.5"
    },

];
{/* <ul>
<li class="list-group-item">Complete C++ Course<span class="float-right">$2.5</span></li>
</ul> */}

function getCourseList()
{
  const ul = document.querySelector(".list-group");
  courses.forEach((course)=>{
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    let courseName = li.createTextNode(course.name);
    li.appendChild(courseName);
    const span = document.createElement("span");
    span.classList.add("float-right");
    let price = span.createTextNode("$" + course.price);
    span.appendChild(price);
    li.appendChild(span);
    ul.appendChild(li);
 
  });
}
window.addEventListener("load",getCourseList);
const button = document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
     return courses.sort((a,b)=>{
        return a.price-b.price;
      });
      getCourseList();
})