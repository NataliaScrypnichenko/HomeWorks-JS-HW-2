const input = document.getElementById('weight');
const resultDiv = document.getElementById('result');
// можемо, поставити подію
input.oninput = function ( ) {
    //*2.2
    //отримати і-цію input
    const  kilos = +this.value;
    let result = kilos * 2.2;
    resultDiv.innerText = result;
}