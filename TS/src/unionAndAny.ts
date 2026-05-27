// union
let subs:number | string = '1M'

let apiRequestStatus: 'panding' | 'success' | 'error' = 'panding'
// we cant write anything instead of above three value
apiRequestStatus='success' 


// Any
const orders = ['12','20','44','33']
// avoid any
let currentOrder:string | undefined;
for(let order of orders){
  if(order === '20'){
    currentOrder = order
    break
  }
  currentOrder='11'
}

console.log(currentOrder);
