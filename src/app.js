
const form = document.querySelector('#form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  form.reset();
  window.alert('Thank you for the application!');
}
