const cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (button) => {
  const menuItem = button.closest(".menu-item");
  const cakeName = menuItem.getAttribute("data-name");
  const cakePrice = parseFloat(menuItem.getAttribute("data-price"));
  const amount = parseInt(
    menuItem.querySelector(".menu-item-cart-amount").value,
    10
  );

  const existingCake = cart.find((cake) => cake.name === cakeName);

  if (existingCake) {
    existingCake.amount += amount;
  } else {
    const cake = {
      name: cakeName,
      price: cakePrice,
      amount: amount,
    };
    cart.push(cake);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
};

const updateCart = () => {
  const cartElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartAmountElement = document.getElementById("cart-amount");
  const cartButtonAmountElement = document.getElementById("cart-button-amount");

  if (!cartElement) return;

  cartElement.innerHTML = "";
  let total = 0;
  let amount = 0;

  cart.forEach((cake, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${cake.name} - $${(cake.price * cake.amount).toFixed(2)} (x${
      cake.amount
    }) <button onclick="removeFromCart(${index})">Remove</button>`;
    cartElement.appendChild(listItem);
    total += cake.price * cake.amount;
    amount += cake.amount;
  });

  cartTotalElement.textContent = total.toFixed(2);
  cartAmountElement.textContent = amount;
  cartButtonAmountElement.textContent = amount;
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
};

document.addEventListener("DOMContentLoaded", updateCart);
