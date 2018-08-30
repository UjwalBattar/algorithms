// This is a demo task.
//
// Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive
// integer (greater than 0) that does not occur in A.
//
// For example, given A = [1, 3, 6, 4, 1, 2], the function should
// return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range
// [−1,000,000..1,000,000].

function missingInteger(A) {
  let arr = A.sort((a, b) => b - a);
  if (!arr.length || arr[0] <= 0) return 1;
  let counter = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > -1 ) {
      if (arr[i] - counter > 1) return counter + 1;
      counter = arr[i];
    }
  }
  return arr[0] + 1;
}

// if (arr[i - 1] - arr[i] > 1) return arr[i] + 1;
missingInteger([4, 5, 6, 2]);

missingInteger( [-1000000, 1000000]);
