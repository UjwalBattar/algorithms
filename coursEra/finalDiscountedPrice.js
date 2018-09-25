[5, 1, 3, 4, 6, 2]
14
1 5



function finalPrice(prices) {
  let sum = 0;
  let indices = "";

  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (prices[j] > prices[i] && j < prices.length) {
      j++;
    }
    if (j === prices.length) {
      indices += i.toString() + " ";
      sum += prices[i];
    } else {
      sum += prices[i] - prices[j];
    }
  }
  console.log(sum);
  console.log(indices);
}
