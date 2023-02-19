// maxSumSubarray([10, -1, 2, 3, -4, 100]);
maxSumSubarray([-1, -1, -1]);


function maxSumSubarray(arr) {
  let maxSum = 0;
  let currentSum = 0;
  let startIndex = 0;
  let endIndex = 0;
  let currentStartIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      currentSum += Number(arr[i]);
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIndex = currentStartIndex;
        endIndex = i;
      }
    } else {
      currentSum = 0;
      currentStartIndex = i + 1;
    }
  }

  if(maxSum === 0) {
    console.log(arr[0])
    return;
  }
  console.log(arr.slice(startIndex, endIndex + 1));
}
