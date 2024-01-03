// let firstName = new String("Mrityunjay");
// console.log(firstName);
// for(let i = 0; i<firstName.length; i++)
// {
//     console.log(firstName.charAt(i));
// }
// console.log(firstName.indexOf('M'));
// console.log(firstName.charAt(3));
window.onload = ()=>{
    const form = document.createElement("form");
    form.method = "get";
    const num1 = document.createElement("input");
    num1.type = "number";
    num1.placeholder = "Enter first number";
    num1.style.width = "30%";
    form.appendChild(num1);
    const num2 = document.createElement("input");
    num2.type = "number";
    num2.placeholder = "Enter second number"; 
    num2.style.width = "30%";
    const operator = document.createElement("select");
    operator.name = "mathsOperator";
    const plusOperator = document.createElement("option");
    plusOperator.value = "+";
    plusOperator.appendChild(document.createTextNode("+"));
    operator.appendChild(plusOperator);
    const minusOperator = document.createElement("option");
    minusOperator.value = "-";
    minusOperator.appendChild(document.createTextNode("-"));
    operator.appendChild(minusOperator);
    const multiplyOperator = document.createElement("option");
    multiplyOperator.value = "*";
    multiplyOperator.appendChild(document.createTextNode("*"));
    operator.appendChild(multiplyOperator);
    const divisionOperator = document.createElement("option");
    divisionOperator.value = "/";
    divisionOperator.appendChild(document.createTextNode("/"));
    operator.appendChild(divisionOperator);
    form.appendChild(operator);
    form.appendChild(num2);

    const res = document.createElement("button");
    res.type = "button";
    res.appendChild(document.createTextNode("="));
    const display = document.createElement("input");
    display.type = "number";
    display.placeholder="Display Result";
    form.appendChild(res);
    form.appendChild(display);
    res.addEventListener("click",()=>{
        if(operator.value ==="+")
        {
           
            display.value = Number(num1.value)+Number(num2.value); 
           
        }
        else if(operator.value === "-")
        {
          
            display.value = num1.value-num2.value;
            
        }
        else if(operator.value === "*")
        {

            display.value = num1.value*num2.value;
            
        }
        else if(operator.value === "/")
        {
            display.value = num1.value/num2.value;
            
        }
    })
    document.body.appendChild(form);
}