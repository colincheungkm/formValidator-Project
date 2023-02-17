'use strict';

// DOM ELEMENTS
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Error Display
const showError = function (input, outputMessage) {
  const formControl = input.parentElement;
  const smallError = formControl.querySelector('small');
  const borderClass = formControl.querySelector('input');
  borderClass.classList.add('border-rose-500');
  smallError.classList.remove('hidden');
  smallError.innerText = outputMessage;
};

// Success Display
const showSuccess = function (input) {
  const formControl = input.parentElement;
  const smallError = formControl.querySelector('small');
  const borderClass = formControl.querySelector('input');
  borderClass.classList.add('border-emerald-500');
  smallError.classList.add('hidden');
};

const checkLength = function (min, max, input) {
  if (input.value.length < min) {
    return false;
  } else if (input.value.length > max) {
    return false;
  } else {
    return true;
  }
};

// EMAIL VALIDATOR
const checkEmail = function (email) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

// PASSWORDS MATCH VALIDATOR
const matchPasswords = function (input1, input2) {
  if (input1 === input2) {
    return true;
  } else {
    return false;
  }
};

// FORM SUBMIT EVENT
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // username validate
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  // email validate
  if (checkEmail(email.value) === false) {
    showError(email, 'Email is invalid');
  } else {
    showSuccess(email);
  }

  // password + password2 validate
  if (
    !checkLength(6, 12, password) ||
    !checkLength(6, 12, password2) ||
    matchPasswords(password.value, password2.value) === false
  ) {
    showError(password, 'Password needs to be 6-12 digits long');
    showError(password2, 'Password needs to match');
  } else {
    showSuccess(password);
    showSuccess(password2);
  }
});
