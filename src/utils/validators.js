/**
 * Validates an email address
 * @param {string} email - Email to validate
 * @returns {boolean} Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Whether the phone number is valid
 */
export const isValidPhone = (phone) => {
  // Basic validation for phone numbers
  const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
  return phoneRegex.test(phone);
};

/**
 * Checks if a string is empty or only whitespace
 * @param {string} str - String to check
 * @returns {boolean} Whether the string is empty
 */
export const isEmpty = (str) => {
  return !str || str.trim() === '';
};
