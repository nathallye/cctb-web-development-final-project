document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    let isValid = true;
    let errorMessage = "";

    if (name.value.trim() === "") {
      isValid = false;
      errorMessage += "Please enter your name.\n";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      isValid = false;
      errorMessage += "Please enter a valid email address.\n";
    }

    if (message.value.trim() === "") {
      isValid = false;
      errorMessage += "Please enter a message.\n";
    }

    if (!isValid) {
      event.preventDefault();
      alert(errorMessage);
    } else {
      alert(
        "Your message has been sent successfully. We will get back to you as soon as possible. Thank you!"
      );
    }
  });
});
