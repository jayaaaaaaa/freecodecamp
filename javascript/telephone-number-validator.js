function telephoneCheck(str) {
    return str.match(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/) ? true : false;
  }
  
telephoneCheck("555-555-5555");
// returns true
  