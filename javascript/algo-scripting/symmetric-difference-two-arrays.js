function diffArray(arr1, arr2) {
    let newArr = [];
  for (let each of arr2) {
        if (!arr1.includes(each)) {
          newArr.push(each);
        }
      }
    
      for (let each of arr1) {
        if (!arr2.includes(each)) {
          newArr.push(each);
        }
      }
    
  
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  