//доступитися
const someForm = document.forms.someForm;

const target  = document.getElementById('target')

someForm.addEventListener( 'submit', (event) =>{
    event.preventDefault();
    //зчитати ін-цію за х-кою name із input
    const nameValue = someForm.name.value;
    //зчитати ін-цію за х-кою surname із input (є атрибут value)
    const surnameValue = someForm.surname.value;
    const ageValue = +someForm.age.value;
    let obj ={nameValue, surnameValue, ageValue}
    console.log(obj);
    target.innerText =obj.nameValue + '' + obj.surnameValue +''+ obj.ageValue
});
