function budgetShopping(n, bQ, bC) {
    let max = 0;

    function calculate(n, bC, bQ, max, pos, count) {
        if (n === 0 || pos === bC.length) {
            max = Math.max(count, max);
            return;
        }

        for (let i = 0; i <= n / bC[pos]; i++) {
            calculate(n - i * bC[pos], bC, bQ, max, pos + 1, count + i * bQ[pos])
        }
    }
    console.log(max);

    calculate(n, bC, bQ, max, 0, 0);
}

budgetShopping(50, [20, 19], [24, 20]);