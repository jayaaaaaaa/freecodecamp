function sumAll(arr) {
    arr.sort(function(a, b){return a-b});
    let sum = arr[0];
    for (let i = sum + 1; i <= arr[arr.length-1]; i++) {
      sum += i;
    }
    return sum;
  }
  
  sumAll([10, 5]);
  // returns 45
  