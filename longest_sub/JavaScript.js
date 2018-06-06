// longest unique substring

// def test()
//   puts maxLenSubString("abcd") # 4
//   puts maxLenSubString("abcda") # 4
//   puts maxLenSubString("aaaa") # 1
//   puts maxLenSubString("abcfajga") # 6
//   puts maxLenSubString("daad") # 2
//
// end
//
// test()
//

function maxLenSubString(sentence) {
  let cHash = {};
  let longest = 0;
  let startIdx = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (cHash[sentence[i]]) {
      if (cHash[sentence[i]] >= startIdx) {
        startIdx = cHash[sentence[i]] + 1;
      }
    }
    cHash[sentence[i]] = i;
    let length = i - startIdx + 1;

    if (length > longest) longest = length;
  }
  return longest;
}
