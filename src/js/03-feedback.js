const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageTextarea = form.querySelector('textarea');

try {
  emailInput.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  messageTextarea.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
} catch {}

let formValues = {
  email: '',
  message: '',
};

form.addEventListener(
  'input',
  throttle(() => {
    {
      formValues.email = emailInput.value;
      formValues.message = messageTextarea.value;
      localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
      console.log(emailInput.value);
    }
  }, 500)
);

const handleSubmit = evt => {
  evt.preventDefault();
  logMessage();
  clearStorage();
  form.reset();
};

function logMessage() {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

function clearStorage() {
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('submit', handleSubmit, false);
