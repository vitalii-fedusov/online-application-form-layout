
const form = document.querySelector("#form");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", onFormSubmit);

const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+?\d{1,3}\d{9}$/;

function onFormSubmit(event) {
  event.preventDefault();

  const phoneIsValid = phoneRegex.test(phoneInput.value);
  const emailIsValid = emailRegex.test(emailInput.value);

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

phoneInput.addEventListener("click", () => {
  phoneInput.classList.remove('error');
  phoneInput.value = '';
})

emailInput.addEventListener("click", () => {
  emailInput.classList.remove('error');
  emailInput.value = '';
})

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains('error')) {
    emailInput.classList.remove('error');
    emailInput.value = '';
  }
})

phoneInput.addEventListener("input", () => {
  if (phoneInput.classList.contains('error')) {
    phoneInput.classList.remove('error');
    phoneInput.value = '';
  }
})
