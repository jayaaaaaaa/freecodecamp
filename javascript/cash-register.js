function checkCashRegister(price, cash, cid) {
    let obj = {
      status: "",
      change: []
    };
    const currency = ["PENNY", "NICKEL", "DIME", "QUARTER", "DOLLAR", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
    const amount = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let difference = cash - price;
    let total = 0;
  
    for (let i = 0; i < cid.length; i++) {
      for (let j = 0; j < currency.length; j++) {
        if (cid[i][0] === currency[j]) {
        total += (cid[i][1] / amount[j]) * amount[j];
      }
      }
    }
  
    for (let i = amount.length; i > 0; i--) {
      if (amount[i] < difference) {
        difference -= amount[i];
      }
    }
  
    let balance = total - difference;
    if (balance > 0) {
      obj.status = "OPEN";
      obj.change = [];
    } else if (balance === 0) {
      obj.status = "CLOSED";
    } else if (balance < 0) {
      obj.status = "INSUFFICIENT_FUNDS";
      return obj;
    }
  
  
    console.log(total, difference, balance, obj);
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  