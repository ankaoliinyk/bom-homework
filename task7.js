/**
Потрібно реалізувати логіку, яка буде формувати 2 випадаючих списки.
У першому містяться назви країн, у другому – назви міст.
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку
певна країна - в правому випадаючому списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript.
Також потрібно нижче в параграфі вивести назву обраної країни і місто.
Спробуйте не вносити зміни в html файл.
 */

let cities = {
    ukr: ["Kharkiv", "Kyiv", "Lviv"],
    ger: ["Cologne", "Berlin", "Munich"],
    usa: ["Los Angeles", "New York", "San Diego"],
};

let selectCountry = document.querySelector("select#country");
let selectCity = document.querySelector("select#cities");

selectCountry.addEventListener("change", function(event) {
    let countryCities = cities[event.target.value];
    selectCity.innerHTML = "";
    countryCities.forEach(function(city) {
        let option = document.createElement("option");
        option.value = city;
        option.innerHTML = city;
        selectCity.appendChild(option)
    })
    let e = new Event('change');
    selectCity.dispatchEvent(e);
})

selectCity.addEventListener("change", function(event) {
    let out = document.querySelector("p");
    let country = document.querySelector("select#country option[value='" + selectCountry.value + "']")
    out.innerHTML = country.innerHTML + ", " + event.target.value;
})

let e = new Event('change');
selectCountry.dispatchEvent(e);
selectCity.dispatchEvent(e);