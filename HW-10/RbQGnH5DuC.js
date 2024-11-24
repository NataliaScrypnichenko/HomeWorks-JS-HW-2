function addToLocalStorage(arrayName,objToAdd){
    //передає ключ і якщо не існує, то..
    if (!localStorage.getItem(arrayName)){
        throw new Error("localStorage is not supported");
    };
    //передача даних
    const array = JSON.parse(localStorage.getItem(arrayName));
    // провіряємо чи є це об'єкт
    if(typeof objToAdd ==='object'){
        array.push(objToAdd);
    };
    //перетворити
    const jsonArray = JSON.stringify(array);
    // додати localStorage
    localStorage.setItem(arrayName,jsonArray)
}

addToLocalStorage('sessionsList', {});
