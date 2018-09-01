/*
    This is by far the most advanced algorithm I could think. And I think it is better than the Divide and conquer algorithm
    1. imagine we start with an array of 2 [1,5], now the min of it is 1, and the maxProfit is 5 - 1 = 4
    2. then on top of that, we add the third number [1, 5, 6], we only need to see if the new number can generate a bigger profit with the min value of the previous array. In this case 6 - 1 = 5, no need to worry about 6 - 5, or 5 - 1
        - for each new number (x) introduced, we need to calculate the profit between min[1, 5, 6, ..., 8] and x
        - then we also need to calculate if x < min
    3. for this method, only one loop will be applied, the overall complexity is O(N);
*/
function maxProfit(Arr){
    var min = Arr[0];
    var profit = 0;
    // count variable is declared to check the complexity of algorithm. Remove it will not affect the functionality
    var count = 0;
    Arr.forEach(function(price){
        if (price - min > profit) profit = price - min;
        if (price < min) min = price;
        count++;
    })

    console.log('total complexity: ', count);
    return profit ? profit : -1;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11, 15, 5, 34, 46, 23, 64, 53, 43, 43, 32, 30, 26, 18, 43, 42, 4, 35, 32, 17]));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([15, 5, 34, 46, 23]));
console.log(maxProfit([64, 53, 43, 43, 32, 30, 26, 18]));
console.log(maxProfit([43, 42, 4, 35, 32, 17]));