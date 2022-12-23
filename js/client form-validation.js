const contactForm = document.querySelector('#form');
const errorMessage = document.querySelector('#error-message');
contactForm.addEventListener('submit', (event) => {
  const email = contactForm.elements.email.value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = 'Email field should be in lower characters.';
    errorMessage.classList.remove('hidden');
  } else {
    errorMessage.classList.add('hidden');
  }
});
