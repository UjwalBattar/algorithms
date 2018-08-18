// The deletion distance between two strings is the minimum sum of
// ASCII values of characters that you need to delete in the two
// strings in order to have the same string. The deletion distance
// between cat and at is 99, because you can just delete the first
// character of cat and the ASCII value of 'c' is 99. The deletion
// distance between cat and bat is 98 + 99, because you need to
// delete the first character of both words. Of course, the deletion
// distance between two strings can't be greater than the sum of their
// total ASCII values, because you can always just delete both of the
// strings entirely. Implement an efficient function to find the
// deletion distance between two strings. You can refer to the Wikipedia
// article on the algorithm for edit distance if you want to.
// The algorithm there is not quite the same as the algorithm required
// here, but it's similar.

function asciiDeletionDistance(str1, str2) {
  let charHash = {};
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (charHash[str1[i]]) {
      charHash[str1[i]] += str1[i].charCodeAt(0);
    } else {
      charHash[str1[i]] = str1[i].charCodeAt(0);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (charHash[str2[i]]) {
      charHash[str2[i]] -= str2[i].charCodeAt(0);
    } else {
      count += str2[i].charCodeAt(0);
    }
  }

   Object.values(charHash).forEach (val => {
     count += val;
   });

   return count;
}

// asciiDeletionDistance("cat", "at");
// asciiDeletionDistance("thought", "sloughs");
