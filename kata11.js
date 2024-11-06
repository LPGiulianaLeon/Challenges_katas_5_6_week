//Title: Remove First and Last Character
//Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
    let strArray = str.split("");
    strArray.shift();
    strArray.pop();
  
    return strArray.join("");
}