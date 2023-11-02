
let buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click", function(event){
    document.body.style.backgroundColor = "blue";
}) 
buttons[1].addEventListener("dblclick", function(event){
    document.body.style.backgroundColor = "pink";
}) 
buttons[2].addEventListener("mousedown", function(event){
    document.body.style.backgroundColor = "#342415";
}) 
buttons[2].addEventListener("mouseup", function(event){
    document.body.style.backgroundColor = "white";
}) 
document.querySelector("a").addEventListener("mouseenter", function(event){
    document.body.style.backgroundColor = "yellow";
})
document.querySelector("a").addEventListener("mouseleave", function(event){
    document.body.style.backgroundColor = "white";
})