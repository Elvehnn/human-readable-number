module.exports = function toReadable (number) {
    let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let decades = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (isNaN(number)) return "NaN";
    if (number === 0) return "zero";
    
    const str = number.toString();
    if (str.length > 3) {
        throw new Error("overflow"); 
    };
    
    let res = '';
    
    if (str[0] !== 0) {
      res += units[str[0]] + " hundred ";
    };

    if (str[1] !== 0) {
      if (str[1] == 1) {
        res += units[str[1] + str[2]];
      } else {
        res += decades[str[1]] + " ";
      }
    };

    if (str[2] >= 1) {
      res += units[str[2]];
    };

    return res;
   
    
}
