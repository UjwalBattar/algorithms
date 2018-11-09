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

function fib(n) {
    console.log(new Date().getTime());

    let cache = fibCacheBuilder(n);
    console.log(new Date().getTime());
    console.log(b - a);
    return cache[n];
}

function fibCacheBuilder(n) {
    if (n <= 0) return "too low";
    let cache = {
        1: 1,
        2: 1
    };
    if (n < 3) return cache;
    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache;
}

let fibCache = {
    1: 1,
    2: 1
};

function fibs()