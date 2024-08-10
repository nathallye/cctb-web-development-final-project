const cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCart = () => {
  const cartElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartAmountElement = document.getElementById("cart-amount");
  const cartButtonAmountElement = document.getElementById("cart-button-amount");

  if (!cartElement) return;

  cartElement.innerHTML = "";
  let total = 0;
  let amount = 0;

  cart.forEach((dessert, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${dessert.name} - $${(
      dessert.price * dessert.amount
    ).toFixed(2)} (x${
      dessert.amount
    }) <button class="cart-button-remove" onclick="removeFromCart(${index})">
      <i class="fa-solid fa-trash"></i>
    </button>`;
    cartElement.appendChild(listItem);

    total += dessert.price * dessert.amount;
    amount += dessert.amount;
  });

  cartTotalElement.textContent = total.toFixed(2);
  cartAmountElement.textContent = amount;
  cartButtonAmountElement.textContent = amount;
};

const addToCart = (button) => {
  const menuItem = button.closest(".menu-item");
  const dessertName = menuItem.getAttribute("data-name");
  const dessertPrice = parseFloat(menuItem.getAttribute("data-price"));
  const amount = parseInt(
    menuItem.querySelector(".menu-item-cart-amount").value,
    10
  );

  const existingDessert = cart.find((dessert) => dessert.name === dessertName);

  if (existingDessert) {
    existingDessert.amount += amount;
  } else {
    const dessert = {
      name: dessertName,
      price: dessertPrice,
      amount: amount,
    };
    cart.push(dessert);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(
    `${amount} ${dessertName} added to your cart. Go through it once you're ready to checkout.`
  );
  updateCart();
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
};

const navigateToHome = () => {
  localStorage.clear();

  updateCart();

  window.location.href = "index.html";
};

document.addEventListener("DOMContentLoaded", updateCart);

document.getElementById("navigate-to-cart").addEventListener("click", () => {
  window.location.href = "cart.html";
});

document
  .getElementById("navigate-to-checkout")
  .addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
