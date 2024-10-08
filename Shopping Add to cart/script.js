let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Product Name 1",
    image: "1.PNG",
    price: 120000,
  },
  {
    name: "Product Name 2",
    image: "2.PNG",
    price: 10000,
  },
  {
    name: "Product Name 3",
    image: "3.PNG",
    price: 30000,
  },
  {
    name: "Product Name 4",
    image: "4.PNG",
    price: 40000,
  },
  {
    name: "Product Name 5",
    image: "5.PNG",
    price: 50000,
  },
  {
    name: "Product Name 6",
    image: "6.PNG",
    price: 60000,
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img src="image/${value.image}"/>
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}

// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key) => {
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;

//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//             <div><img src="image/${value.image}"/></div>
//             <div>${value.name}</div>
//             <div>${value.price.toLocaleString()}</div>
//             <div>
//                 <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                 <div class="count">${value.quantity}</div>
//                 <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//             </div>
//             `;
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.price * value.quantity; 
      count += value.quantity; 

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
      listCard.appendChild(newDiv); // Append the new div to the listCard
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, qty) {
  if (qty == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = qty;
  }
  reloadCard();
}

// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity + products[key].price;
//     }
//     reloadCard();
// }
