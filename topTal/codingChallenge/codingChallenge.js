function turbulance(A) {
  if (!A.length) return 0;
  if (A.length === 1) return 1;
  let max = 0;
  let count = 1;

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      count++;
    } else if (A[i] < A[i - 1] && A[i] < A[i + 1]) {
      count++;
    } else {
      max = Math.max(max, count + 1);
      count = 1;
    }
  }
  return Math.max(max, count + 1);
}

// function beads(A) {
//   if (!A.length) return 0;
//
//   let visited = {};
//   let max = 0;
//   let count = 0;
//   let start;
//   let next;
//   for (let i = 0; i < A.length; i++) {
//     if (!visited[A[i]]) {
//       start = i;
//       next = A[i];
//       while (start !== next) {
//         count++;
//         visited[A[i]] = 1;
//         next = A[next];
//       }
//       max = Math.max[max, count];
//     }
//   }
//   return max;
// }
