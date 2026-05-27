const chai = {
  name:"Masala chai",
  price:20,
  isHot:true
}

// {
//   name: string;
//   price:number;
//   isHot:boolean
// }

let tea: {
  name:string;
  price:number;
  isHot:boolean
}
tea = {
  name:"ginger tea",
  price:25,
  isHot:true
}

type Tea = {
  name:string;
  price:number;
  ingredients:string[]
}

const adarakChai: Tea = {
  name:"adarak",
  price:30,
  ingredients:["ginger","masala"]
}

type Cup = {size:string};
let smallCup:Cup = {size:"200ml"}

let bigCup = {size:"500ml",material:"steel"}
smallCup = bigCup

type Brew = {brewTime:number};
const coffee = {brewTime:5, beans:"Arabica"}
const chaiBrew:Brew = coffee

type User = {
  username:string;
  password:string
}

const u:User = {
  username:"chaiCode",
  password:"123"
}

type Item = {name:string, quantity:number}
type Address = {name:string, quantity:number}

type Order = {
  id:string;
  Items:Item[]
  address:Address
}

type Chai = {
  name:string;
  price:number;
  isHot:boolean
}

const updateChai = (updates:Partial<Chai>) => {
  console.log("updating chai with",updates);
}

updateChai({price:20})
updateChai({isHot:false})
updateChai({})

type order = {
  name:string;
  quantity:number
}
