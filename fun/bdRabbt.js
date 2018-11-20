/*
Please scroll
if needed to to reach the final word "END"

Given "FOOD", a nested list that represents types of food(chips, bars, soups,
        nuts), subtypes of food(e.g.corn, walnut), and quantities of those subtypes:

    const FOOD = [
        ["chip", [
            ["corn", 12],
            ["fried potato", 17],
            ["baked potato", 82],
            ["pita", 42],
            ["rice", 25]
        ]],
        ["bar", [
            ["clif", 22],
            ["snicker", 7],
            ["granola", 52],
            ["power", 92],
            ["nut", 35]
        ]],
        ["soup", [
            ["tortilla", 10],
            ["tomato", 37],
            ["split pea", 77],
            ["borscht", 24],
            ["chicken", 40]
        ]],
        ["nut", [
            ["almond", 200],
            ["cashew", 300],
            ["walnut", 400]
        ]]
    ];

// Write a
// function "getNTopItemsOfType"
// with two parameters:


Such that when we,
for example, apply "getNTopItemsOfType"
to these values::

    getNTopItemsOfType(5, ["bar", "chip", "soup"]);

We get this result:

    [
        ["bar", "power", 92],
        ["bar", "granola", 52],
        ["soup", "split pea", 77],
        ["chip", "baked potato", 82],
        ["chip", "pita", 42]
    ]

What "getNTopItemsOfType" does:

    Returns the "count"
most populous items descrived in the inventory "FOOD"..
Ignoring any types in "FOOD"
where the first item is not in the "types"
parameter,
Transforming the input format of

    [
        [type, [
            [itemtype, itemcount],
            [itemtype, itemcount], ..
        ]], ...
    ]

to

    [[type, itemtype, itemcount], ...],

    Sorted primarily by the item type as ordered in "types"("bar"
        comes before "soup"
        comes before "chip")

Sorted secondarily by the itemcount("baked potato"
    comes before "pita")
*/
const FOOD = [
    ["chip", [
        ["corn", 12],
        ["fried potato", 17],
        ["baked potato", 82],
        ["pita", 42],
        ["rice", 25]
    ]],
    ["bar", [
        ["clif", 22],
        ["snicker", 7],
        ["granola", 52],
        ["power", 92],
        ["nut", 35]
    ]],
    ["soup", [
        ["tortilla", 10],
        ["tomato", 37],
        ["split pea", 77],
        ["borscht", 24],
        ["chicken", 40]
    ]],
    ["nut", [
        ["almond", 200],
        ["cashew", 300],
        ["walnut", 400]
    ]]
];

// function getNTopItemsOfType(count, types) {
//     let items = {};
//     FOOD.forEach(type => {
//         if (types.includes(type[0])) {
//             type[1].forEach(item => {
//                 if (items[item[1]]) {
//                     items.push([type[0], item[0], item[1]]);
//                 } else {

//                     items[item[1]] = [
//                         [type[0], item[0], item[1]]
//                     ];
//                 }
//             });
//         }
//     });
//     let res = [];
//     types = types.sort();
//     let amounts = Object.keys(items).sort((a, b) => b - a);
//     let i = 0;
//     while (res.length < count) {
//         items[amounts[i]].forEach(el => res.push(el))
//         i++;
//     }
//     res = res.sort((a, b) => {
//         return a[1].localeCompare(b[1]);
//     });

//     res = res.sort((a, b) => {
//         return a[0].localeCompare(b[0]);
//     });
//     return res;

// }

getNTopItemsOfType(5, ["chip", "bar", "soup"]); // =>
// [
//     ["bar", "power", 92],
//     ["bar", "granola", 52],
//     ["soup", "split pea", 77],
//     ["chip", "baked potato", 82],
//     ["chip", "pita", 42]
// ]

// function getNTopItemsOfType(count, types) {
//     const result = [];
//     let filtered;
//     filtered = FOOD.filter(function (item) {
//         for (let i = 0; i < types.length; i++) {
//             if (item[0] === types[i]) {
//                 return item;
//                 // if item [0] which should be "chip"== any of our types return the item;
//             }
//         }
//     });
//     // now that food does not contain any non valid types we can push key value pairs on to list.
//     filtered.map(function (item) {
//         const type = item[0];
//         const items = item[1]; // possibly sort here to retain item type??
//         for (let i = 0; i < items.length; i++) {
//             result.push([type, items[i][0], items[i][1]]);
//         }
//         // EAMON can you call me back if your still watching?:(

//     });
//     // sort index 2 
//     result.sort(function (a, b) {
//         return a[2] < b[2];
//     });
//     // top based on count 
//     function top(arr, count) {
//         temp = [];
//         for (let i = 0; i < count; i++) {
//             temp.push(arr[i]);
//         }
//         return temp;
//     }

//     // return new array based on top count. sort result based on first paramater bar< chip. The only part I have a problem is keeping the type order so am just returning alphabetically, appreciate feedback.
//     console.log(top(result, count).sort(function (a, b) {
//         return a[0] > b[0]
//     }));
//     return top(result, count).sort(function (a, b) {
//         return a[0] > b[0]
//     });
// }