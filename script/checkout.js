document.getElementById("checkout-form").onsubmit = (event) => {
  if (!validateCheckoutForm()) {
    event.preventDefault();
  }
};

const validateEmail = (email) => {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateCardNumber = (number) => {
  let regex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
  return regex.test(number);
};

const validateCheckoutForm = () => {
  // Deliver address
  let fullName = document.getElementById("full-name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zip-code").value;

  // Credit card
  let cardName = document.getElementById("card-name").value;
  let cardNumber = document.getElementById("card-number").value;
  let expMonth = document.getElementById("exp-month").value;
  let expYear = document.getElementById("exp-year").value;
  let cvv = document.getElementById("cvv").value;

  if (
    fullName === "" ||
    email === "" ||
    address === "" ||
    city === "" ||
    state === "" ||
    zipCode === ""
  ) {
    alert("Please fill in all fields in the Delivery Form.");
    return false;
  } else if (
    cardName === "" ||
    cardNumber === "" ||
    expMonth === "" ||
    expYear === "" ||
    cvv === ""
  ) {
    alert("Please fill in all fields in the Payment Form.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validateCardNumber(cardNumber)) {
    alert("Please enter a valid credit card number.");
    return false;
  }

  if (expMonth < 1 || expMonth > 12) {
    alert("Please enter a valid expiration month.");
    return false;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("Please enter a valid CVV.");
    return false;
  }

  return true;
};
