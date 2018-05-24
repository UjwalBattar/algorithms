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
