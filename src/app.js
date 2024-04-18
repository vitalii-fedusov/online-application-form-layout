const form = document.querySelector("#form");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", onFormSubmit);

const emailRegex = /^[\p{L}\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/u;
const phoneRegex1 = /^\+\(\d{2}\)\d{10}$/;
const phoneRegex2 = /^\+\d{3}\d{9}$/;
const phoneRegex3 = /^\d{10}$/;
const phoneRegex4 = /^\+\d{2}\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
const phoneRegex5 = /^\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}$/;

function onFormSubmit(event) {
  event.preventDefault();

  const phoneIsValid =
    phoneRegex1.test(phoneInput.value.trim()) ||
    phoneRegex2.test(phoneInput.value.trim()) ||
    phoneRegex3.test(phoneInput.value.trim()) ||
    phoneRegex4.test(phoneInput.value.trim()) ||
    phoneRegex5.test(phoneInput.value.trim());

  const emailIsValid = emailRegex.test(emailInput.value.trim());

  if (!phoneIsValid) {
    phoneInput.classList.add("error");
    phoneInput.value = "Невірний формат номеру";
  }

  if (!emailIsValid) {
    emailInput.classList.add("error");
    emailInput.value = "Невірний формат пошти";
  }

  if (!emailIsValid || !phoneIsValid) {
    return;
  }

  form.reset();
  window.alert("Дякуємо, ваша заявка прийнята!");
}

phoneInput.addEventListener("click", clearError);
emailInput.addEventListener("click", clearError);
emailInput.addEventListener("input", clearError);
phoneInput.addEventListener("input", clearError);

function clearError() {
  if (this.classList.contains("error")) {
    this.classList.remove("error");
    this.value = "";
  }
}
