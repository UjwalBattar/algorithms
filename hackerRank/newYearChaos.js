// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by  from  at the front of the line to  at the back.
//
// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if and  bribes , the queue will look like this: .
//
// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
//
// Function Description
//
// Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.
//
// minimumBribes has the following parameter(s):
//
// q: an array of integers
// Input Format
//
// The first line contains an integer , the number of test cases.
//
// Each of the next  pairs of lines are as follows:
// - The first line contains an integer , the number of people in the queue
// - The second line has  space-separated integers describing the final state of the queue.
//
// Constraints
//
// Subtasks
//
// For  score
// For  score
//
// Output Format
//
// Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than  people.
//
// Sample Input
//
// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4
// Sample Output
//
// 3
// Too chaotic
// Explanation
//
// Test Case 1
//
// The initial state:
// [1, 2, 3, 4, 5]
//
// After person 5 moves one position ahead by bribing person 4:
// [1, 2, 3, 5, 4]
//
// Now person 5 moves another position ahead by bribing person 3:
// [1, 2, 5, 3, 4]
//
// And person 2 moves one position ahead by bribing person 1:
// [2, 1, 5, 3, 4]
//
// So the final state is [2, 1, 5, 3, 4] after three bribing operations.
//
// Test Case 2
//
// No person can bribe more than two people, so its not possible to achieve the input state.
//
// REALLY GOOD EXPLANATION:
// Two points to bear in mind while solving this problem:
//
// A person can bribe the one who is sitting just in front of him. The opposite is not possible.
// A person can bribe atmost 2 different persons.
// Keeping this in mind, let's have a look at testcase-1.
//
// First case:
//
// Current position : 5 1 2 3 7 8 6 4
// Initial position : 1 2 3 4 5 6 7 8
// In the first test, the person-5 has occupied 1st seat. That means he has to bribe 4 persons in front of him to reach on the 1st seat So he violated the second rule here. So that answer is "Too chaotic" without further speculation.
//
// Second case:
//
// Current position : 1 2 5 3 7 8 6 4
// Initial position : 1 2 3 4 5 6 7 8
// So how did person-4 occupy at position 8? As per the rules, it's not possible for person-4 to bribe persons who are sitting behind him. Instead person 5, 6, 7 & 8 bribed person-4 as he is sitting infront of them. Here is the trasition from initial position to the current position.
//
// 1 2 3 4 5 6 7 8  : 0 swap (initial)
// 1 2 3 5 4 6 7 8  : 1 swap (5 and 4)
// 1 2 3 5 6 4 7 8  : 1 swap (6 and 4)
// 1 2 3 5 6 7 4 8  : 1 swap (7 and 4)
// 1 2 3 5 6 7 8 4  : 1 swap (8 and 4)
// 1 2 5 3 6 7 8 4  : 1 swap (5 and 3)
// 1 2 5 3 7 6 8 4  : 1 swap (7 and 6)
// 1 2 5 3 7 8 6 4  : 1 swap (8 and 6)
//
// Obviously no person violated the second rule here. Hence the output is minimum number of swaps 7.

function minimumBribes(q) {
    let bribes = 0;
    for (let i = q.length - 1; i >= 0; i--) {
       let temp = q[i] - (i + 1);
        if (temp > 2) {
            console.log('Too chaotic');
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) bribes++;
        }
    }
    console.log(bribes);
    return;
}
