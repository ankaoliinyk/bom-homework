/**
 Реалізуйте логіку видалення вибраного елементу списку при натисканні на кнопку.
 Видаляти елементи можна в будь якому порядку.
 */

document.querySelector("button").addEventListener("click", function(event) {
    let select = document.querySelector("select");
    let selectedOption = select.querySelector("option[value='"+ select.value +"']");
    if(selectedOption) {
        selectedOption.remove();
    }
})
