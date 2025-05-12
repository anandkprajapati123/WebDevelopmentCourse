// MAP METHODS
// Map is a collection of key-value pairs

let info=new Map([
    ['name','Anand'],
    ['age',20],
    ['phone','1234567890'],
]);
console.log(info);
console.log(typeof(info));
console.log(info.set('age','21'));
console.log(info.get('name'));
console.log(info.delete('name'));
console.log(info.has('age'));
console.log(info);