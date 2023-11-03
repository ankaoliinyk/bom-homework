let box = document.createElement("div");
box.innerHTML ="Width: " + window.innerWidth + ", Height: " +  window.innerHeight;
document.body.appendChild(box);
window.addEventListener("resize", function(event) {
    let out = document.querySelector("div");
    out.innerHTML ="Width: " + window.innerWidth + ", Height: " +  window.innerHeight;
})