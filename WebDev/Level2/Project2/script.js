var products = [
  {name: "White chair", headline: "Soft like cloud!", price: "15,000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {name: "Black chair", headline: "Soft like cloud!", price: "17,000", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
  {name: "Traditional Chair", headline: "Soft like cloud!", price: "19,500", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
];

var popular = [
  {name: "Yellow chair", headline: "Smooth like sofa!", price: "15,000", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1258",
  },
  {name: "Blue chair", headline: "Soft like sofa!", price: "17,000", image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1206",
  },
  {name: "Traditional Chair", headline: "Soft like cloud!", price: "19,500", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
];

var cart = [];

function addProduct(){
var cluter = "";
products.forEach(function(product, index) {
  cluter += `<div class="product w-fit rounded-xl p-2 bg-white">
  <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full object-cover" src="${product.image}" />
  </div>
  <div class="data w-full px-2 py-5">
    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
    <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20">Hangup data.</h3>
          <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
        </div>
        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
      <i data-index="${index}" class="add ri-add-line"></i></button>
    </div>
  </div>
</div>`;
});

document.querySelector(".products").innerHTML= cluter;
}

function addPopularProduct(){
var cluter = "";
popular.forEach(function(product){
  cluter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
  <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
    <img class="w-full h-full object-cover" src="${product.image}" alt="">
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${product.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
      <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
    </div>
  </div>`;

  document.querySelector(".populars").innerHTML= cluter;
});
}

function addToCart(product){
  document.querySelector(".products").addEventListener("click", function(details){
    if(details.target.classList.contains("add")){
      cart.push(products[details.target.dataset.index]);
    }
  })
}

function showCart(){
  document.querySelector(".carticon").addEventListener("click",function(){
    document.querySelector(".cartexpnd").style.display="block";

    var cluter = "";
    cart.forEach(function(prod, index){
      cluter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
      <img class="w-full h-full object-cover" src="${prod.image}" />
      </div>
        <div>
          <h3 class="front-semibold">${prod.name}</h3>
          <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
        </div>
      </div>`;
    })
    document.querySelector(".cartexpnd").innerHTML= cluter;
  });
}

showCart();
addProduct();
addPopularProduct();
addToCart();