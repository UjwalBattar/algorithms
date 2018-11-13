function countMoves(numbers) {
    // Write your code here
    let min = numbers[0];
    let sum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        min = Math.min(min, numbers[i]);
        sum += numbers[i];
    }
    return sum - (min * numbers.length);
}

function rollingString(s, operations) {
    // Write your code here
    let string = s.split("");
    let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lows = caps.toLowerCase();

    for (let operation of operations) {
      let i = operation[0];
      let j = operation[2];
      let dir = operation[4];
      while (i <= j) {
        let el = string[i];
        if (dir === 'L') {
          if (el === el.toLowerCase()) {
            if (el === 'a') {
              string[i] = 'z';
            } else {
              string[i] = lows[el.charCodeAt() - 97 - 1];
            }
          } else {
            if (el === 'A') {
              string[i] = 'Z';
            } else {
              string[i] = caps[el.charCodeAt() - 65 - 1];
            }
          }
        } else {
          if (el === el.toLowerCase()) {
            if (el === 'z') {
              string[i] = 'a';
            } else {
              string[i] = lows[el.charCodeAt() - 97 + 1];
            }
          } else {
            if (el === 'Z') {
              string[i] = 'A';
            } else {
              string[i] = caps[el.charCodeAt() - 65 + 1];
            }
          }
        }
        i++;
      }
    }
    return string.join("");
}
