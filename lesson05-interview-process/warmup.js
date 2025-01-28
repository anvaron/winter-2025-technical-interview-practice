/**
 * 
 * @param {*} str 
 * @returns
 * Approach:
 * convert the string to an array of characters
 * reverse the array
 * join the array to form a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

/**
 * 
 * @param {*} str 
 * @returns 
 * Approach:
 * split the string by spaces to form an array of words
 * map the array of words to capitalize the first letter of each word
 * join the array of words to form a string
 */
function capitalizeWords(str) {
  return str.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

/**
 * 
 * @param {*} str 
 * @returns 
 * Approach:
  * match all the vowels in the string
  * return the length of the matched vowels
 */
function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
