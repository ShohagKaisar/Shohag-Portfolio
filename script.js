const form = document.getElementById("contactForm");
const mobile = document.getElementById("mobile");
const countryCode = document.getElementById("countryCode");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const mobileError = document.getElementById("mobileError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  // Reset errors
  [nameError, emailError, mobileError, messageError, successMsg].forEach(el => el.classList.add("hidden"));

  let isValid = true;

  if (name.value.trim() === "") { nameError.classList.remove("hidden"); isValid = false; }
  if (email.value.trim() === "" || !email.value.includes("@")) { emailError.classList.remove("hidden"); isValid = false; }
  if (countryCode.value === "") {
    alert("Please select your country code before entering your mobile number.");
    isValid = false;
  }
  if (mobile.value.trim() === "") { mobileError.classList.remove("hidden"); isValid = false; }
  if (message.value.trim() === "") { messageError.classList.remove("hidden"); isValid = false; }

  if (!isValid) return;

  // Prepare full number
  const phoneNumber = mobile.value.replace(/\D/g, ''); // remove non-digits
  const fullNumber = countryCode.value + phoneNumber;

  // WhatsApp message text
  const text = `Hello 👋%0A%0AName: ${name.value}%0AEmail: ${email.value}%0AMobile: ${fullNumber}%0AMessage: ${message.value}`;
  
  // WhatsApp URL
  const whatsappURL = `https://wa.me/01677056327?text=${text}`;
  window.open(whatsappURL, "_blank");

  // Success message
  successMsg.classList.remove("hidden");
  form.reset();

  setTimeout(() => successMsg.classList.add("hidden"), 3000);
});

// Disable typing in mobile input until country code is selected
mobile.addEventListener("keydown", function (e) {
  if (countryCode.value === "") {
    e.preventDefault();
    alert("Please select your country code first!");
  }
});
