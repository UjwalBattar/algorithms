// Paper Cut into Minimum Number of Squares
// Given a paper of size A x B. Task is to cut the paper into
// squares of any size. Find the minimum number of squares that can
// be cut from the paper.
// Examples:
// Input  : 13 x 29
// Output : 9
// Explanation :
// 2 (squares of size 13x13) +
// 4 (squares of size 3x3) +
// 3 (squares of size 1x1)=9
//
// Input  : 4 x 5
// Output : 5
// Explanation :
// 1 (squares of size 4x4) +
// 4 (squares of size 1x1)


function minSquares(l, w) {
	if (l < w) [l, w] = [w, l];
	if (!l || !w) return 0;
	let count = minSquares(l % w, w);
	return count + Math.floor(l / w);
}
