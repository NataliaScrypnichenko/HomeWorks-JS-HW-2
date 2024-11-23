let sessionsList =[];// будуємо масив
// робимо перевірку і
if (localStorage.getItem('sessionsList')){
    // якщо ні, то формується масив
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
}else {
    //якщо його немає, то формується пустий об'єкт
    sessionsList = [];
}
//зберігаємо і-цію про відвідану сесію(перегляд сторінки)

sessionsList.push(new Date());//пишемо
//  записуємо в localStorage, перетворили і відправляємо
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));