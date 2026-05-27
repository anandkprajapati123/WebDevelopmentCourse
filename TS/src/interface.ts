type ChaiOrder = {
  type:string;
  sugar:number;
  strong:boolean;
}

function makeChai(order:ChaiOrder){
  console.log(order);
}

function serveChai(Order:ChaiOrder){
  console.log(Order);
}

type TeaRecipe = {
  water:number;
  milk:number;
}

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 60;
// }

interface cupSize {
  size:"small" | "large"
}

class Chai implements cupSize {
  size: "small" | "large" = "large";
}

type Response = {ok:true} | {ok:false}
class myRes implements Response {
  ok:boolean=true;
}

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t:TeaType){
  console.log(t);
}

type BaseChai = {teaLeaves:number};
type extra = {masala:number}
type masalaChai = BaseChai & extra

const cup: masalaChai = {
  teaLeaves:2,
  masala:1
}

type User = {
  usernamee:string;
  bio?:string
}

const u1:User = {usernamee:"Anand"}
const u2:User = {usernamee:"Anand",bio:"linkedIn"}

type Config = {
  readonly appName:string
  version:number
}

const cfg:Config = {
  appName:"Anand",
  version:1
}

// cfg.appName="ChaiCode"