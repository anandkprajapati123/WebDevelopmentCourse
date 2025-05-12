// CLASS in JS
// class is a blueprint for creating objects
class carInfo{
    constructor(name,model,year,price){
        this.name = name;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    display(){
        console.log(`Car Name: ${this.name}`);
        console.log(`Details about the car ${this.name},${this.model},${this.year},${this.price}`);
    }
}
// crrate an object of the classInfo
let c1=new carInfo("Maruti","swift",2020,200000);
c1.display();
let c2=new carInfo("Tata","Nexon",2021,250000);
c2.display();