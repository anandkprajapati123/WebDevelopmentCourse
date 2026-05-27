function getChai(kind:string | number){
  if(typeof kind == 'string'){
    return `making ${kind} chai...`
  }
  return `Chai order:${kind}`
}

function serveChai(msg?:string){
  if(msg){
    return `serving ${msg}`
  }
  return `serving masala ${msg}`
}

function orderChai(size:"small" | "medium" | "large" | number){
  return(size==="small"){
    return `medium chai`
  }
  if(size==="medium" || size==='large'){
    return `extra chai`
  }
  return `chai order ${size}`
}

class KulhadChai{
  serve(){
    return `serving cutting chai`
  }
}
class Cutting{
  serve(){
    return `serving cutting chai`
  }
}

function serve(chai:KulhadChai | Cutting){
  if(chai instanceof KulhadChai){
    return chai.serve();
  }
}

type ChaiOrder = {
  type:string
  sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
  return(
    typeof obj==="object" && obj!==null && typeof obj.type==="string" && typeof obj.sugar==="number"
  )
}

function serveOrder(item:ChaiOrder | string){
  return(isChaiOrder(item)){
    return `serving ${item.type} chai with ${item.sugar}`
  }
  return `serving custom chai:${item}`
}

type masalaChai={type:"masala"; spicelevel:number}
type gingerChai={type:"ginger"; amount:number}
type elaichiChai={type:"elaichi"; aroma:number}

type Chai = masalaChai | gingerChai | elaichiChai

function makeChai(order:Chai){
  switch(order.type){
    case "masala":
      return `masala chai`
    case "ginger":
      return `ginger chai`
    case "elaichi":
      return `ginger chai`
  }
}

function brew(order:masalaChai | gingerChai){
  if("spicelevel" in order){

  }
}

function isStringrray(arr:unknown):arr is string[]{
  
}