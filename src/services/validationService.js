// validationService.js

// Function to check if a given input value is not empty
export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

// Function to check if a given input value is a valid email address
export const isValidEmail = (value) => {
  // You can use a regular expression to validate email addresses
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};
// Function to check if a given input value has a minimum length of 3 characters
export const hasMinimumLength = (value, minLength) => {
  return value.length >= minLength;
};
// Function to check if a new username is different from the current username
export const isUsernameDifferent = (newUsername, currentUsername) => {
  return newUsername !== currentUsername;
};
