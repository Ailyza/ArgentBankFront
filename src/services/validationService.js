
export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

// Email valide
export const isValidEmail = (value) => {


  return emailPattern.test(value);
};
// 3 caractères minimum
export const hasMinimumLength = (value, minLength) => {
  return value.length >= minLength;
};
// username different
export const isUsernameDifferent = (newUsername, currentUsername) => {
  return newUsername !== currentUsername;
};
