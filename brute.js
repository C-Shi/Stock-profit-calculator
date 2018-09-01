function maxProfit(Arr){
    var max = 0;
    // count variable is declared to check the complexity of algorithm. Remove it will not affect the functionality 
    var count = 0;
    for (var i = 0; i < Arr.length; i++){
        for (var j = i + 1; j < Arr.length; j++){
            if (Arr[j] - Arr[i] > max){
                max = Arr[j] - Arr[i];
            }
            count++;
        }
    }
    console.log('total complexity: ', count);
    return max || -1;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11, 15, 5, 34, 46, 23, 64, 53, 43, 43, 32, 30, 26, 18, 43, 42, 4, 35, 32, 17]));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([15, 5, 34, 46, 23]));
console.log(maxProfit([64, 53, 43, 43, 32, 30, 26, 18]));
console.log(maxProfit([43, 42, 4, 35, 32, 17]));