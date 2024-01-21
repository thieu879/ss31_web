function maxSubArraySum(arr, n) {
    let SubArray  = 0;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        SubArray  += arr[i];
    }
    maxSum = SubArray ;
    for (let i = n; i < arr.length; i++) {
        SubArray  = SubArray  - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, SubArray );
    }
    return maxSum;
}
let arr1 = [1, 2, 5, 2, 8, 1, 5];
let arr2 = [1, 2, 5, 2, 8, 1, 5];
console.log(maxSubArraySum(arr1, 2));
console.log(maxSubArraySum(arr2, 4));