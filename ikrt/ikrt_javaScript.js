function budgetShopping(n, bQ, bC) {
    let max = 0;
    // console.log(max);
    max = calculate(n, bQ, bC, max);

    console.log(max);

    return max;
}

function calculate(n, bQ, bC, max) {
    // console.log(max);
    if (n <= 0) return max;
    for (let i = 0; i < bQ.length; i++) {
        max = Math.max(calculate(n - bC[i], bQ, bC, max + bQ[i]), max);
    }
}

budgetShopping(50, [20, 19], [24, 20]);