function palindrome(str) {
    let string = str.toLowerCase().replace(/[\W_]/g, '');
    let final = string.split('').reverse().join('');
    
    return (string === final) ? true : false;
  }
  
palindrome("eye");
// returns true  