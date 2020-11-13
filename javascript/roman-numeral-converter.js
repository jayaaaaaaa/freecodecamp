function convertToRoman(num) {
    let dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romanised = "";

    for (let i = 0; i < dec.length; i++) {
        while (dec[i] <= num) {
            romanised += roman[i];
            num -= dec[i];
        }
    }
    return romanised;
}

convertToRoman(289);
// returns CCLXXXIX