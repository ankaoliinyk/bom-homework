/**
1. створить нове вікно розміром 300х300 пікселів;
2. із затримкою 2 сек змініть розміри вікна на 500х500 пікселів;
3. із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200);
4. із затримкою 2 сек закрийте вікно.
 */

let newTab = window.open(
    "about:blank",
    "task1",
    "width=300,height=300"
)

setTimeout(function() { 
  newTab.resizeTo(500, 500);
}, 2000);

setTimeout(function() { 
    newTab.moveTo(200, 200);
}, 4000);

setTimeout(function() { 
    newTab.close();
}, 6000);