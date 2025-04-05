/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    console.log(maxCandies)
    return candies.map(candy => (candy + extraCandies) >= maxCandies);
};



console.log(kidsWithCandies([2, 20, 3, 1, 0], 3));