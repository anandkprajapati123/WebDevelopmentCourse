let DATA="Secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data =",DATA);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="Some new value";
    }
}

let stu1=new User("Anand","abcd@gmail.com");
let stu2=new User("anand","avbvb@gmail.com");
let teacher1=new User("Dean","dean@gmail.com");
let admin1=new Admin("admin","college@gmail.com");


// Error Handling
let a=5;
let b=10;
console.log("a =",a);
console.log("b =",b);
try{
    console.log("a+b =",a+c);
}
catch(err){
    console.log(err);
}
console.log("a+b =",a+b);
