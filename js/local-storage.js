const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitForm = document.querySelector('.submit-form');
const myForm = document.querySelector('.contact_me__form');
const inputsArray = [nameInput, emailInput, messageInput];

function saveFormInputs(name, email, message) {
  const formInformation = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('formInformation', JSON.stringify(formInformation));
}

// submit validation
window.addEventListener('load', () => {
  if (JSON.parse(localStorage.getItem('formInformation'))) {
    const { name, email, message } = JSON.parse(localStorage.getItem('formInformation'));
    nameInput.value = name;
    emailInput.value = email;
    messageInput.value = message;
  }
});

submitForm.addEventListener('click', (e) => {
  saveFormInputs(nameInput, emailInput, messageInput);
  myForm.reset();
});

inputsArray.forEach((input) => input.addEventListener('input', (e) => {
  if (input === nameInput) {
    nameInput.value = input.value;
  } else {
    messageInput.value = input.value;
  }
  saveFormInputs(nameInput, emailInput, messageInput);
}));
