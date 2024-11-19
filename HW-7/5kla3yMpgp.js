class Car{
    constructor(model, manufacturer, year, speed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = speed;
        this.engineVolume = engineVolume;
    };
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info (){
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed (newSpeed){
        if(newSpeed>0)
            this.maxSpeed=this.maxSpeed + newSpeed;
    };
    changeYear (newValue){
        if (newValue> this.year)
            this.year = newValue ;
    };
    addCar (driver){
        if (driver)
            this.driver =driver;
    };
}
const car = new Car ('BMW X5 F15 ','Germany',2018, 160,381);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2019);
car.addCar({});
console.log(car);
