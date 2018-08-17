// Given a number n, print all primes smaller than or equal to n.
// It is also given that n is a small number.
//
// Example:
//
// Input : n =10
// Output : 2 3 5 7
//
// Input : n = 20
// Output: 2 3 5 7 11 13 17 19
//
// The sieve of Eratosthenes is one of the most efficient ways to find
// all primes smaller than n when n is smaller than 10 million
// or so (Ref https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).
//
// Following is the algorithm to find all the prime numbers less than
// or equal to a given integer n by Eratosthenes’ method:
//
// Create a list of consecutive integers from 2 to n: (2, 3, 4, …, n).
// Initially, let p equal 2, the first prime number.
// Starting from p, count up in increments of p and mark
// each of these numbers greater than p itself in the list.
// These numbers will be 2p, 3p, 4p, etc.; note that some of
// them may have already been marked. Find the first number greater
// than p in the list that is not marked. If there was no such number,
// stop. Otherwise, let p now equal this number (which is the next
// prime), and repeat from step 3. When the algorithm terminates,
// all the numbers in the list that are not marked are prime.
//
// Primes using sieve of Eratosthenes method:

function primesTo(n) {
  let primeArray = [];
  let max = Math.sqrt(n);
  let result = [2];

  for (let i = 0; i < n; i++) {
    primeArray.push(1);
  }

  for (let i = 3; i <= max; i += 2) {
    if (primeArray[i]) {
      for (let j = i * i; j < n; j += i * 2) {
        primeArray[j] = 0;
      }
    }
  }

  for (let i = 3; i < n; i += 2) {
    if (primeArray[i]) result.push(i);
  }

  return result;
}
