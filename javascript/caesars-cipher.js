function rot13(str) {
    let decode = "";
  
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 64 && str.charCodeAt(i) <= 77) {
        let input = (str.charCodeAt(i) + 13);
        decode += String.fromCharCode(input);
      } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
        let input = (str.charCodeAt(i) + 12 - 25);
        decode += String.fromCharCode(input);
      } else {
        decode += str[i];
      }
    }
    return decode;
  }
  
rot13("SERR PBQR PNZC");
// returns FREE CODE CAMP
  