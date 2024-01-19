// expresion régulière
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
