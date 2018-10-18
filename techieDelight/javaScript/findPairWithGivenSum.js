// Find pair with given sum in the array

// Input: 
//     arr = [8, 7, 2, 5, 3, 1];
//     sum = 10;

// Output:
//     pair found at index 0 and 2 (8 + 2)
//     or
//     pair found at index 0 and 2 (7 + 3)

function firstPairEqualSum(arr, sum) {
    const complements = {};
    let el;
    for (let i = 0; i < arr.length; i++) {
        el = arr[i];
        if (el === sum) return i;
        if (complements[el]) {
            console.log(`${arr[complements[el] - 1]} and ${arr[i]} equal ${sum}.`);
            return `${arr[complements[el] - 1]} and ${arr[i]} equal ${sum}.`;
        } else {
            complements[sum - el] = i + 1;
        }
    }
    console.log('Pair equaling sum not found.');
    return 'Pair equaling sum not found.';
}

firstPairEqualSum([8, 7, 2, 5, 3, 1], 10);

// function allPairsEqualSum(arr, sum) {
//     let res = [];

// }