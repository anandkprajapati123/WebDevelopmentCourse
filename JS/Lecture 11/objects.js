// const student={
//     name:"Anand",
//     age:21,
//     marks:85,
//     printmarks:function(){
//         console.log("marks=", this.marks);
//     },
// };
const Employee={
    calcTax(){
        console.log("tax is 10%");
    },
    // calcTax2:function(){
    //     console.log("tax is 10%")
    // }
};
const anand={
    salary:60000,
    calcTax(){
        console.log("tax is 20%");
    }
};

anand.__proto__=Employee;
