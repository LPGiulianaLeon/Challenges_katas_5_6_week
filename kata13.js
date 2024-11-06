//Title: Vowel Count
//Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    let stringArray = str.split("");
    let cont = 0;
    for (let i = 0; i < stringArray.length; i++) {
      if (
        stringArray[i] === "a" ||
        stringArray[i] === "e" ||
        stringArray[i] === "i" ||
        stringArray[i] === "o" ||
        stringArray[i] === "u"
      ) {
        cont++;
      }
    }
    return cont;
  }