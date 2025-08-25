class Car{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
};

let bullero=new Car("bullero",20); //constructor invoked
console.log(bullero);
// bullero.setBrand("Bullero");
let fortuner=new Car("Fortuner",15);
console.log(fortuner);
// fortuner.setBrand("Fortuner");

class Person{
    constructor(name){
        // console.log("Enter parent constructor")
        this.species="Homo sepians";
        this.name=name;
    }
    eat(){
        console.log("Person can eat");
    }
    sleep(){
        console.log("Sleep");
    } 
    work(){
        console.log("Do nothing");
    }
}
// class Child extends Person{}
// let child=new Child();

class Engineer extends Person{
    constructor(name){
        // console.log("Enter child constructor")
        super(name); // to invoke parent class constructor
        // this.branch=branch;
        // console.log("Exit child constructor")
    }
    work(){
        console.log("Solve problems, build something");
    }
}
let AnandObj=new Engineer("Anand");