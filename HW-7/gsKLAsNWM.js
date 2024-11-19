Array.prototype.myForeach= function (callback){
    const yourArray= this;
    for (const item of yourArray){
        callback(item >5);
    }
};
[8,2,30].myForeach((y)=>{
    console.log(y);
});
//створити власний filter
Array.prototype.myFilter= function(condition){
    const arr =[];
    for (const item of this){
        if(condition(item)){
            arr.push(item)
        }
    }
    return arr;
};
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const result = users.myFilter((user)=>user.age>30 );
console.log(result);