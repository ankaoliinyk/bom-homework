/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */
function changeCSS() {
    let el = document.querySelector("p#text");
    el.style.color = "orange";
    el.style.fontSize = "20px";
    el.style.fontFamily = "Comic Sans MS"
}
document.querySelector("button").addEventListener("click", function(event) {
    changeCSS()
})
