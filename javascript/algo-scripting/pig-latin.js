function translatePigLatin(str) {

    let strArray = [...str];
    let vowelStart = true;
    for(let i = 0; i < strArray.length; i++) {
      if (!strArray[0].match(/[aeiou]/)) {
        strArray.push(strArray[0]);
        strArray.splice(0, 1);
        vowelStart = false;
      }
    }
  
  (vowelStart) ? strArray.push("way") : strArray.push("ay") ;
    
    
    console.log(strArray.join(''));
    return strArray.join('');
  }
  
  translatePigLatin("glove");
  // returns oveglay
  