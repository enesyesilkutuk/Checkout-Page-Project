const allButtons = document.querySelectorAll("button");
const quantity = document.querySelectorAll("#product-quantity");
const product1 = document.querySelectorAll(".product")[0];
const product2 = document.querySelectorAll(".product")[1];
const product3 = document.querySelectorAll(".product")[2];
const subTax = document.querySelector("#cart-tax");
const shipping = document.querySelector("#cart-shipping");
const subTotal = document.getElementById("cart-subtotal");
const finalTotal = document.querySelector("#cart-total");
let price;
let amount;
let total;
let subTotalInfo1 = 25.98;
let subTotalInfo2 = 45.99;
let subTotalInfo3 = 74.99;
let subTotalAll = 20;
let taxInfo;
let shippingCost = 15;
let totalCost;
subTotal.firstElementChild.nextElementSibling.innerHTML = 146.96;
subTax.firstElementChild.nextElementSibling.innerHTML = 26.45;
shipping.lastElementChild.innerHTML = 15;
finalTotal.lastElementChild.innerHTML = 188.41;

allButtons.forEach(item => {

   item.addEventListener("click", (e) => {

      if (item.parentElement.previousElementSibling.previousElementSibling.innerHTML == "Vintage Backbag") {

         if (e.target.classList.contains("fa-minus")) {

            if (item.nextElementSibling.innerHTML == "1") return;

            amount = Number(item.nextElementSibling.innerHTML);

            amount -= 1;

            item.nextElementSibling.innerHTML = amount;

            price = Number(item.parentElement.previousElementSibling.firstElementChild.textContent.slice(0, 5));

            total = (amount * price);

            total = total.toFixed(2);

            item.nextElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML = total;

            subTotalInfo1 = Number(item.nextElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML);

         } else if (e.target.classList.contains("fa-plus")) {

            amount = Number(item.previousElementSibling.innerHTML);

            amount += 1;

            item.previousElementSibling.innerHTML = amount;

            price = Number(item.parentElement.previousElementSibling.firstElementChild.textContent.slice(0, 5));

            total = (amount * price);

            total = total.toFixed(2);

            item.previousElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML = total;

            subTotalInfo1 = Number(item.previousElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML);

         }

      } else if (item.parentElement.previousElementSibling.previousElementSibling.innerHTML == "Levi Shoes") {

         if (e.target.classList.contains("fa-minus")) {

            if (item.nextElementSibling.innerHTML == "1") return;

            amount = Number(item.nextElementSibling.innerHTML);

            amount -= 1;

            item.nextElementSibling.innerHTML = amount;

            price = Number(item.parentElement.previousElementSibling.firstElementChild.textContent.slice(0, 5));

            total = (amount * price);

            total = total.toFixed(2);

            item.nextElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML = total;

            subTotalInfo2 = Number(item.nextElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML);

         } else if (e.target.classList.contains("fa-plus")) {

            amount = Number(item.previousElementSibling.innerHTML);

            amount += 1;

            item.previousElementSibling.innerHTML = amount;

            price = Number(item.parentElement.previousElementSibling.firstElementChild.textContent.slice(0, 5));

            total = (amount * price);

            total = total.toFixed(2);

            item.previousElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML = total;

            subTotalInfo2 = Number(item.previousElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML);
         }

      } else if (item.parentElement.previousElementSibling.previousElementSibling.innerHTML == "Antique Clock") {

         if (e.target.classList.contains("fa-minus")) {

            if (item.nextElementSibling.innerHTML == "1") return;

            amount = Number(item.nextElementSibling.innerHTML);

            amount -= 1;

            item.nextElementSibling.innerHTML = amount;

            price = Number(item.parentElement.previousElementSibling.firstElementChild.textContent.slice(0, 5));

            total = (amount * price);

            total = total.toFixed(2);

            item.nextElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML = total;

            subTotalInfo3 = Number(item.nextElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML);

         } else if (e.target.classList.contains("fa-plus")) {

            amount = Number(item.previousElementSibling.innerHTML);

            amount += 1;

            item.previousElementSibling.innerHTML = amount;

            price = Number(item.parentElement.previousElementSibling.firstElementChild.textContent.slice(0, 5));

            total = (amount * price);

            total = total.toFixed(2);

            item.previousElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML = total;

            subTotalInfo3 = Number(item.previousElementSibling.parentElement.nextElementSibling.nextElementSibling.innerHTML);
         }
     
      } else if (item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML == "Vintage Backbag") {

         product1.style.display = "none";

         subTotalInfo1 = 0;

      } else if (item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML == "Levi Shoes") {

         product2.style.display = "none";

         subTotalInfo2 = 0;
      
      } else if (item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML == "Antique Clock") {

         product3.style.display = "none";

         subTotalInfo3 = 0;
      }

      subTotalAll = Number((subTotalInfo1 + subTotalInfo2 + subTotalInfo3).toFixed(2));

      subTotal.firstElementChild.nextElementSibling.innerHTML = subTotalAll;

      taxInfo = Number(((subTotalAll) * 0.18).toFixed(2));

      subTax.firstElementChild.nextElementSibling.innerHTML = taxInfo;

      totalCost = (subTotalAll + taxInfo + shippingCost).toFixed(2);

      finalTotal.lastElementChild.innerHTML = totalCost;
   
   });

});

