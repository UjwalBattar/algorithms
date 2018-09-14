During a road trip through China, you realize you might be able to
meet a friend who's also driving around. You've both already planned
out your respective routes but want to know when your paths will cross.

Your GPS has the road system mapped as a simple grid (using
  coordinates), and defines each route as a string of characters:

U moves you up  kilometer (north) along the -axis.
D moves you down  kilometer (south) along the -axis.
L moves you left  kilometer (west) along the -axis.
R moves you right  kilometer (east) along the -axis.
Given the initial locations and routes that you and your friend plan
to take, how many kilometers will you travel before you meet? It is
guaranteed that your paths will cross.

Input Format

Stub code in the editor reads a string representing a JSON object and
passes it to processData as :

The JSON object has two properties: p1 and p2.
Each property has the following:
A starting point, start, with an array containing the  and  coordinates
of the starting position.
A path with a string representing a sequence of movements.
Constraints

The input always has the p1 and p2 properties
The p1 and p2 properties always have the start and path properties
start is always an array with two numbers that describes the respective
and  coordinates of a starting location.
path is always a string with a sequence of the following uppercase
letters: U (up), D (down), L (left), and/or R (right).
Output Format

Using the console.log command, print the output in x,y n format,
where x is the -coordinate, y is the -coordinate, and n is the number
of kilometers until both people meet. For example, -3,5 20 means they
will meet after  kilometers at the intersection of position  on the
-axis and position  on the -axis.

Sample Input

{
  "p1": { "start": [0,0], "path": "RUDURURU" },
  "p2": { "start": [4,4], "path": "LDUDLDLD" }
}
Sample Output

2,2 6
Explanation

Given the following data:

{
  p1: { start: [0,0], path: 'RUDURURU' },
  p2: { start: [4,4], path: 'LDUDLDLD' }
}
Person  is southwest of person  and they meet after traveling
kilometers. Person  travels the path RUDURU and person  travels
the path LDUDLD, at which point they meet at location . Thus,
we print 2,2 6 as our answer.

function whenWeMeet(input) {
  let km = 0;
  for (let i = 0; i < input.p1.path.length && i < input.p2.path.length; i++) {
    if (input.p1.start[0] === input.p2.start[0] && input.p1.start[1] === input.p2.start[1]) {
      console.log(`${input.p1.start[0]}, ${input.p1.start[1]} ${km}`);
      return `${input.p1.start[0]}, ${input.p1.start[1]} ${km}`;
    }
    km++;
    let p1Move = input.p1.path[i];
    let p2Move = input.p2.path[i];
    if (p1Move === 'R') input.p1.start[0]++;
    if (p1Move === 'L') input.p1.start[0]--;
    if (p1Move === 'U') input.p1.start[1]++;
    if (p1Move === 'D') input.p1.start[1]--;
    if (p2Move === 'R') input.p2.start[0]++;
    if (p2Move === 'L') input.p2.start[0]--;
    if (p2Move === 'U') input.p2.start[1]++;
    if (p2Move === 'D') input.p2.start[1]--;
  }
}

whenWeMeet({
  p1: { start: [0,0], path: 'RUDURURU' },
  p2: { start: [4,4], path: 'LDUDLDLD' }
})


// hR ans:
// function processData(input) {
//     //Enter your code here
//     let km = 0;
//     input = JSON.parse(input);
//   for (let i = 0; i < input.p1.path.length && i < input.p2.path.length; i++) {
//     if (input.p1.start[0] === input.p2.start[0] && input.p1.start[1] === input.p2.start[1]) {
//       console.log(`${input.p1.start[0]},${input.p1.start[1]} ${km}`);
//       return;
//         // `${input.p1.start[0]}, ${input.p1.start[1]} ${km}`;
//     }
//     km++;
//     let p1Move = input.p1.path[i];
//     let p2Move = input.p2.path[i];
//     if (p1Move === 'R') input.p1.start[0]++;
//     if (p1Move === 'L') input.p1.start[0]--;
//     if (p1Move === 'U') input.p1.start[1]++;
//     if (p1Move === 'D') input.p1.start[1]--;
//     if (p2Move === 'R') input.p2.start[0]++;
//     if (p2Move === 'L') input.p2.start[0]--;
//     if (p2Move === 'U') input.p2.start[1]++;
//     if (p2Move === 'D') input.p2.start[1]--;
//   }
// }
