// PLUS a bunch of react trivia
// LEARN: ElasticSearch, Redux Sage, Python

input - [4,7,3,1,8,6,7,3,5,3]

output1 - [43875]
output2 - [71633]

function splitArrays(arr) {
    let res1 = [];
    let res2 = [];

    for (let i = 0; i < arr.length; i++) {
        if ( i % 2 === 0) {
            res1.push(arr[i]);
        } else {
            res2.push(arr[i]);
        }
    }

    return `${res1} + "/n" +  ${res2}`;
}


Given nums = [2, 7, 11, 15], target = 9,

function twoSum(arr, tgt) {
    let complimentHash = {};

    let res = [];

    for (let i = 0; i < arr.length ; i++) {

        if (complimentHash[arr[i]]) {
            res.push([complimentHash[arr[i]], i]);

       } else {
           comlimentHash[tgt - arr[i]] = i;
       }
    }
    return res;
}


Given a string, find the length of the longest substring without repeating characters.
Input: "pwwkew"
Output: 3 "wke"

function longestUniqueSubstring(str) {
    if (str.length < 2) return 1;
    let charHash;
    let longest = 0;

    for (let i = 0; i < str.length; i++) {
        charHash = {srtr[i]: 1};
        temp = 1
        let j = i + 1;
        for (j < str.length; j++) {
            if (!charHash[j]) {
                charHash[j] = 1;
                temp++;
            } else {
                longest = Math.max(temp, longest);
                break;
            }
        }
        i = j;
    }
    return longest;
}
