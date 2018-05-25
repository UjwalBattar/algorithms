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

function uniqueCharString2(string) {
  string.sort();

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[1 + 1]) return false;
    return true;
  }
}

// 1.2 Write code to reverse a C-Style String
// (C-String means that “abcd” is represented as five characters,
// including the null character )
