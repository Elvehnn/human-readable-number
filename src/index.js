module.exports = function toReadable (number) {
    let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let decades = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (isNaN(number)) return "Введите число";
    if (number === 0) return "zero";

  let str = number.toString();
    if (str.length > 3) {
        throw new Error("overflow"); 
    } else {
    str = ("0000" + number.toString()).slice(-3);
    };
    
    let res = '';
    
    if (+str[0] !== 0) {
      res += units[str[0]] + " hundred";
    };

    if (+str[1] > 1 && res !== "") {
        res += " " + decades[+str[1]];
    } else if (+str[1] > 1 && res == "") {
      res += decades[+str[1]];
    } else if (+str[1] == 1 && res !== "") {
        res += " " + units[+str[1] + str[2]];
        return res;
    } else if (+str[1] == 1 && res == "") {
        res += units[+str[1] + str[2]];
        return res;
    };
    
    if (+str[2] >= 1 && res !== "") {
      res += " " + units[+str[2]];
    } else if (+str[2] >= 1 && res == "") {
      res += units[+str[2]];
    } else if (+str[2] == 0) {
          return res;
    };

    return res;
  }
  
