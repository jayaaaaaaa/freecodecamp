function myReplace(str, before, after) {
    let strArr = str.split(" ");
    let beforeIndex = strArr.indexOf(before);
  
    if (strArr[beforeIndex][0] === strArr[beforeIndex][0].toUpperCase()) {
      after = [...after];
      after[0] = after[0].toUpperCase();
      after = after.join("");
      strArr[beforeIndex] = after;
    } else {
      strArr[beforeIndex] = after.toLowerCase();
    }
    
    strArr = strArr.join(" ");
    return strArr;
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
  // returns "He is Sitting on the couch"
  