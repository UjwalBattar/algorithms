// 1. Write a JavaScript program to calculate the factorial of a number
// In mathematics, the factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than
// or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(n) {
  if (n === 0) return 1;

  let prev = factorial(n - 1);
  return prev * n;
}
// 2. Write a JavaScript program to find the greatest common divisor
// (gcd) of two positive numbers.
function recGCD(n1, n2) {
	if (!n2) return n1;
	return recGCD(n2, n1 % n2);
}

// 3. Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function integersInRange(x, y) {
  if (y - x === 2) return x + 1;
  let prevRange = integersInRange(x, y - 1);
  prevRange.push(x - 1);
  return prevRange;
}

// 4. Write a JavaScript program to compute the sum of an
// array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
function arrSum(arr) {
	if (arr.length === 0) return 0;
	let prevSum = arrSum(arr.slice(0, arr.length - 1));
	prevSum += arr[arr.length -1];
  return prevSum;
}

// 5. Write a JavaScript program to compute the exponentiation of a
// given base and exponent, both positive (x, y).
// Note : The exponent of a number says how many times the base
// number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
function recExponentiation(x, y) {
	if (y === 0) return 1;
	let prev = recExponentiation(x, y - 1);
	return x * prev;
}


// 6. Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of
// numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent
// number is the sum of the previous two.
function recFib(n) {
  if (n <= 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  let prevFibs = recFib(n - 1);
  let last = prevFibs.length - 1;
  prevFibs.push(prevFibs[last] + prevFibs[last - 1]);
  return prevFibs;
}

// 7. Write a JavaScript program to check whether a
// number is even or not.
function recIsEven(n) {
	if (n === 0 || n === 2) return true;
	if (n === 1) return false;
	return recIsEven(n - 2);
}

// 8. Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
function bSearch(arr, n) {
	if (arr.length <= 0) return -1;
	let mid = Math.floor(arr.length / 2);
	if (arr[mid] === n) {
		return mid;
	} else if (arr[mid] > n) {
		return bSearch(arr.slice(0, mid), n);
  } else {
  	let sub = bSearch(arr.slice(mid + 1), n);
  	return sub === -1 ? -1 : sub + (mid + 1);
  }
}

// 9. Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
function merge(left, right) {
	let sorted = [];
	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			sorted.push(left.shift());
		} else {
			sorted.push(right.shift());
		}
	}
	return sorted.concat(left, right);
}
