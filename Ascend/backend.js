// 1. Braces
function braces(values) {
   let parenStack = [];
    let res = [];
    for (let value of values) {
   for (let i = 0; i < value.length; i++) {
     if (parenStack[parenStack.length - 1] === value[i]) {
       parenStack.pop();
     } else if (value[i] === '(') {
       parenStack.push(')');
     } else if (value[i] === '[') {
       parenStack.push(']');
     } else if (value[i] === '{') {
       parenStack.push('}');
     } else {
       parenStack.push(value[i]);
     }
   }

   if (parenStack.length) {
       res.push('NO');
       parenStack = [];
   }  else {
    res.push('YES');
   }

    }
    return res;
}

// 2. Zombie Clusters
// http://codealgo.com/?p=364
// https://www.careercup.com/question?id=14948781

function zombieCluster(zombies) {
    // Write your code here
    let clusters = 0;
    for (let i = 0; i < zombies.length; i++) {
      for (let j = 0; j < zombies.length; j++) {
        console.log('ZOMBIE!!');
      }
    }

}

// [
//   '10000',
//   '01000',
//   '00100',
//   '00010',
//   '00001'
// ]

// 3. Fun with Palindromes
// A palindrome is a word, phrase, number, or other
// sequence of characters which reads the same forward
// and backwards. For example: "madam" and "dad" are
// palindromes, but "sir" and "sad" are not.
// The fun score for two subsequences(not
// substrings), A and B, in string s is the product of their
// respective lengths. There are many ways to
// choose A and B, but your goal is to maximize the fun
// score. There can't be any overlap or crossover between
// the two subsequences.
// Given string s, select exactly two non-overlapping noncrossing-over
// palindromic subsequences, A and B,
// from s to maximize the fun score.
// Non crossing over means that given the string aababb,
// you can't get "aaa" and "bbb", since the subsequences cross
// over.
// Question - 9
// Fun with palindromes
// Constraints
// 1 < |s| ≤ 3000
// s is composed of lowercase English characters.
// Input Format
// Complete a function named funPal which takes a single
// string (s) as a parameter.
// Output Format
// Return a single integer denoting the maximum
// possible fun score for s.
// Sample Input 0
// "acdapmpomp"
// Sample Output 0
// 15
// Sample Input 1
// "axbawbaseksqke"
// Sample Output 1
// 25
// Explanation
// Sample Case 0
// You can select A= "aca" and B= "pmpmp" . The product is 3
// * 5 = 15, so we return 15.
// Sample Case 1
// You can select A= "ababa" and B= "ekske" . The product is 5
// * 5 = 25, so we print 25. Another possible solution
// is A= "ababa" and B= "ekqke" which also yields the
// answer 25.

function getScore(s) {
    // Write your code here

}

// 4. Travelling is fun
// https://www.hackerrank.com/contests/hack-it-to-win-it-paypal/challenges/q4-traveling-is-fun/problem

function connectedCities(n, g, originCities, destinationCities) {
    // Write your code here

}
