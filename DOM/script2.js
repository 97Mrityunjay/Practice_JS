window.onload = ()=>{   
   const form = document.createElement("form");
   const label = document.createElement("label");
   const fullName = document.createElement("input");
   fullName.placeholder = "Full Name";
   label.appendChild(fullName);
   form.appendChild(label);
   document.body.appendChild(form);
}