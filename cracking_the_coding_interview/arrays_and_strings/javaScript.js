// 1.1
// Implement an algorithm to determine if a string has
// all unique characters
// What if you can not use additional data structures?

// 'hello' => false
// '' => true
// 'Yatch' => true

function uniqueCharString(string) {
  let strChars = {};

  for (let i = 0; i < string.length; i++) {
    if (strChars[string[i]]) return false;
    strChars[string[i]] = true;
  }
  return true;
}

// 1.2 Check Permutation: Given two strings, write a method to decide
// if one is a permutation of the other.

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === str2) return true;
  let strHash = {};

  for (let i = 0; i < str1.length; i++) {
    if (strHash[str1[i]]) {
      strHash[str1[i]] += 1;
    } else {
      strHash[str1[i]] = 0;
    }
    if (strHash[str2[i]]) {
      strHash[str2[i]] += 1;
    } else {
      strHash[str2[i]] = 0;
    }
  }

  Object.values(strHash).forEach(el => {
    if (el % 2 === 0) return false;
  });
  return true;
}

// 1.3 URLify: Write a method to replace all spaces in a string with
// '%20' You may assume that the string has sufficient space at the end
// to hold the additional characters, and that you are given the "true"
// length of the string.
// (Note: If implementing in Java, please use a character array so that
//  you can perform this operation in place.)

function URLify(string, len) {
  return string.trim().replace(/\s\s+/g, "%20");
}

function isPalindromePermutation(string) {
  let charSet = {};
  let count = 0;
  string = string.toLowerCase();
  let i = 0;
  while (i < string.length) {
    if (charSet[string[i]]) {
      charSet[string[i]] -= 1;
    } else if (string[i] !== " ") {
      charSet[string[i]] = 1;
    }
    i++;
  }

  Object.values(charSet).forEach(el => {
    if (el >= 1) count++;
  });
  if (count > 1) return false;
  return true;
}

// 1.4 Palindrome Permutation: Given a string, write a function to check
// if it is a permutation of a palindrome. A palindrome is a word or
// phrase that is the same forwards and backwards. A permutation is a
// rearrangement of letters. The palindrome does not need to be limited to
// just dictionary words.
//
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)
// Hints: #106, #121, #134, #136

function isPermutationPalindrome(s) {
  let charHash = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    let c = s[i].toLowerCase().charCodeAt(0);
    if (charHash[c] % 2 === 1) {
      charHash[c]++;
      count--;
    } else if (charHash[c] % 2 === 0) {
      charHash[c]++;
      count++;
    } else {
      charHash[c] = 1;
      count++;
    }
  }
  return count <= 1;
}
