//constructor in javascript


 function Person(name){
this.name = name
this.greet = function(){
    console.log("hi"+this.name);
}
}

const person2 = new Person(' abdullah');
person2.greet();
const person4 = new Person(' abdullah google');
person4.greet();
const person3 = new Person(' fatima');
person3.greet();

//static: belongs to class not an object

class Animal{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("animal "+ this.name+ " is walking");
    }
}
j= new Animal("zebra")
j.walk();
an= new Animal("girrafe")
an.walk();
//getters and setters
class car{
    constructor(power){
        this.power = power;
    }
}
let Car = new car(400+ ' speed')
console.log(Car.power);


class Carinfo{
    constructor(model, year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
const car1 = new Carinfo("M","20243","blue");
displayInfo(car1);
function displayInfo(Carinfo){
console.log(Carinfo.model);
console.log(Carinfo.year);
console.log(Carinfo.color);
}