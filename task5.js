/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",\
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Нове повідомлення додається до уснуючих.
додаткове випробування: обмежити кількість виведених повідомлень до 5,
при додаванні повіомлення після 5го, зі сторінки має зникнути найстаріше повідомлення.
*/
let out = document.createElement("div");
let button = document.querySelector("button");
document.body.appendChild(out);
button.addEventListener("click", function(event) {
    let box = document.createElement("p");
    box.innerHTML = "I was pressed!";
    document.querySelector("div").appendChild(box);
})

button.addEventListener("mouseenter", function(event) {
    let box = document.createElement("p");
    box.innerHTML = "Mouse on me!";
    document.querySelector("div").appendChild(box);
})
button.addEventListener("mouseleave", function(event) {
    let box = document.createElement("p");
    box.innerHTML = "Mouse is not on me!";
    document.querySelector("div").appendChild(box);
})