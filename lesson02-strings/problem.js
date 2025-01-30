/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let longest = 0;
  console.log(s);

  if (s.length === 0) {
    return longest;
  }
  if (s.length === 1) {
    return 1;
  }
  
}

module.exports = lengthOfLongestSubstring;
