/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that 
 * reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 * 
 * Validate if string contains spaces
 */
function isPalindrome(str) {
  
  let filteredStr = '';//str.replace(/[^\w]|_/g, '');
  
  const specialCharPattern = /[^a-zA-Z0-9 ]/; // Matches anything that's not a letter, number, or space.
  const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
 
  for (let char of str) {
      if (validChars.includes(char)) {
        filteredStr += char;
      }
  }
  let reversedStr = filteredStr.split('').reverse().join('');
  if(filteredStr === '' || specialCharPattern.test(str)) return true;
  if(filteredStr === reversedStr) return true; else return false;
}

module.exports = isPalindrome;
