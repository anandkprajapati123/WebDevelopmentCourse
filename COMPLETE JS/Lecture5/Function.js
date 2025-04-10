function myFunction(msg,n){ //function definition(parameter)
    console.log("Anand");
    console.log(msg*n); //output --> Not a Number
}
myFunction("i love JS",10); //function call(argument)

function sum(a,b){
    local variables --> scope
    s=a+b;
    console.log(a);
    console.log("before return");
    return s;
    console.log("after return"); // not print
}
let val=sum(3,4);
console.log(val);

Sum Function
function sum(a,b){
    return a+b;
}

mul function
function mul(c,d){
    return a*b;
}

// Use arrow function
const arrowmul=(a,b)=>{
    console.log(a*b);
}

arrowmul=6;

const printHello=()=>{
    console.log("hello");
};
