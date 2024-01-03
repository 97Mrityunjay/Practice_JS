window.onload = ()=>{
const heading = document.createElement("h2");
// const headingText = document.createTextNode("Heading 2");
// heading.appendChild(headingText);
// document.body.appendChild(heading);
const container = document.querySelector(".container");
const colors = document.querySelectorAll(".color");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const grey = document.querySelector(".grey");
// container.style.border = "1px solid #1f1f1f";
container.style.border = "none";
container.style.width = "60%"
container.style.height = "500px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
red.style.border = "1px solid #1f1f1f";
red.style.margin = "20px";
red.style.width = "90px";
red.style.height = "90px";
red.style.backgroundColor = "red";

yellow.style.border = "1px solid #1f1f1f";
yellow.style.width = "90px";
yellow.style.height = "90px";
yellow.style.margin = "20px";
yellow.style.backgroundColor = "yellow";

grey.style.border = "1px solid #1f1f1f";
grey.style.width = "90px";
grey.style.height = "90px";
grey.style.margin = "20px";
grey.style.backgroundColor = "grey";

colors.forEach((color) => {
    console.log(colors);
    color.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        document.body.style.backgroundColor = window.getComputedStyle(color).backgroundColor;
    })
});

}