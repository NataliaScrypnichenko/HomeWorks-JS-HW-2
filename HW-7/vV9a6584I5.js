function Car (model, manufacturer, year, speed, engineVolume){
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = speed
    this.engineVolume = engineVolume
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive=function (){
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info=function (){
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed=function (newSpeed){
        if (newSpeed>0)
            this.maxSpeed = this.maxSpeed + newSpeed;
    };
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear= function (newValue){
        if (newValue> this.year)
            this.year = newValue ;
    };
    //addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addCar= function (driver){
        if (driver);
        this.driver =driver;
        function driver( name, surname , email, phone){
            this.name=name;
            this.surname =surname;
            this.email =email;
            this.phone =phone;
        }
    }
};
const car = new Car ('BMW X5 F15 ','Germany',2018, 260,381);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2019);
car.addCar({});
car.addCar({});
console.log(car);