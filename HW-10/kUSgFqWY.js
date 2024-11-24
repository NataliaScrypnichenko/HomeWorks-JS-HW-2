//знаходимо id="table"
const table = document.getElementById("table");
//знаходимо tableGeneratorForm
const tableGeneratorForm =  document.forms['tableGeneratorForm'];

//повинен реагувати
tableGeneratorForm.onsubmit = function (event){
    //чистити таблицю
    table.innerText = '';
    //перезавантажує сторінку
    event.preventDefault();
    //зчитуємо форму і додаємо числове значення
    const linesValue =  +tableGeneratorForm.lines.value;
    const cellsValue =  +tableGeneratorForm.cells.value;
    const dataValue =  tableGeneratorForm.data.value;
    console.log(linesValue,cellsValue,dataValue);
    //будуємо структуру коли невідомо скільки, то виконуємо цикл-ітерація lines
    for (let i = 0; i < linesValue; i++){
        // будуємо і додаємо lines
        const tr = document.createElement('tr');
        table.appendChild(tr);
        //  запускаємо цикл cells
        for (let i = 0; i < cellsValue; i++){
            // будуємо і додаємо cells
            const td = document.createElement('td');
            td.innerText = dataValue
            table.appendChild(td);
        }
    }
};

