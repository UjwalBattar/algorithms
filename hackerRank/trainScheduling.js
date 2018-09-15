// As you leave your hotel, you check the train schedule and notice it's
// bugged — you can't see when the trains are arriving! Because you need
// to know the exact order of arrival of each train, you hack around the
// page and find a series of instructions that must be parsed by a
// JavaScript compiler code in order to display the arrival messages.
//
// The compiler displays these messages using the  statement. If there's
// a programmed delay to display it, that statement is wrapped inside a
// function. The compiler also trims any trailing spaces from the
// messages and appends a at the end of every  statement messages.
//
// There is specific syntax for writing code for the compiler. For
// example:
//
// msg : () is used for
// console.log(msg)
// msg : (a) is used for
// setTimeout(function() {
//     console.log(msg);
// }, a);
// msg : ((a)b) is used for
// setTimeout(function() {
//     setTimeout(function() {
//         console.log(msg);
//     }, a);
// }, b);
// msg : (((a)b)c) is used for
// setTimeout(function() {
//     setTimeout(function() {
//         setTimeout(function() {
//             console.log(msg);
//         }, a);
//     }, b);
// }, c);
// Given  valid codes, print the correctly compiled output for each code
// on a new line.
//
// Note
// You are not allowed to use  function call in your code.
//
// Input Format
//
// The first line contains a single integer, , denoting the total number
// of statements.
// Each of the  subsequent lines contains code for a  statement.
//
// Constraints
//
// msg is a string consisting of lowercase English letters (), numbers,
// and spaces.
// The length of msg is not greater than .
// It is guaranteed that no  is delayed for more than  seconds.
// It is guaranteed that no two  statements will be delayed for the
// same amount of time.
// There will be no more than  nested  function calls.
// Output Format
//
// Print the output of the code after successful execution.
//
// Sample Input
//
// 6
// msg 3 : ((750)1000)
// msg 4 : (1000)
// msg 1 : (((250)250)1000)
// msg 2 : ((1000)1000)
// msg 5 : ()
// msg 6 : ()
// Sample Output
//
// msg 5.
// msg 6.
// msg 4.
// msg 1.
// msg 3.
// msg 2.
// Explanation
//
// The code given as input is:
//
// setTimeout(function() {
//     setTimeout(function() {
//         console.log("msg 3");
//     }, 750);
// }, 1000);
//
// setTimeout(function() {
//     console.log("msg 4");
// }, 1000);
//
// setTimeout(function() {
//     setTimeout(function() {
//         setTimeout(function() {
//             console.log("msg 1");
//         }, 250);
//     }, 250);
// }, 1000);
//
// setTimeout(function() {
//     setTimeout(function() {
//         console.log("msg 2");
//     }, 1000);
// }, 1000);
//
// console.log("msg 5");
// console.log("msg 6");
// When we run this code using the JavaScript compiler, we get the
// following output:
//
// msg 5
// msg 6
// msg 4
// msg 1
// msg 3
// msg 2
// Because the compiler defined in the Problem Statement above appends a
// at the end of all  statements, the output will be:
//
// msg 5.
// msg 6.
// msg 4.
// msg 1.
// msg 3.
// msg 2.
