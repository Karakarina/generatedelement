
const color = [

{
    name: " second",
    color: "orange",
},

{
    name: " third",
   color: "yellow",
},



{
    name: " fourth",
    color: "grin",
},

{
    name: " fifth",
    color: "blue",
},
{
    name: "sixth",
    color: "dark blue",
},
{
    name: "seventh",
    color: "violet",
},


];

//  {<li class="list-group-iteam">
//     complete React.js course
// <span class="float-right">$20</span>
// </li> }


function generateLIST(){
    const ul = document.querySelector(".ul");
color.forEach(color=>{

    const li = document.createElement("li");
    li.classList.add("list");

    const name = document.createTextNode( color.name + " ");
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("span");

    const day = document.createTextNode(  color.color  );
    span.appendChild(day);
    
    li.appendChild(span)
    ul.appendChild(li)
});
}
// generateLIST(); 

window.addEventListener("load",generateLIST);
const button = document.querySelector(".but")

button.addEventListener("click", ()=>{
    color.sort((a, b)=>a.color - b.color);
    generateLIST();
});
