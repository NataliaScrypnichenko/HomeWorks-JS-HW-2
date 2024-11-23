let nNumber=  +localStorage.getItem('number');//буде давати 0
nNumber +=1//збільшуємо
localStorage.setItem('number', nNumber);//зберігатися
 document.getElementById('block').innerText=nNumber //знаходимо і записуємо