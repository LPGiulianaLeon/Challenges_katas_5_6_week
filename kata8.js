//Title: Is it a palindrome?
// Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    let cleanX = x.toLowerCase(); 
    let inverseX = cleanX.split("").reverse().join(""); 
    return cleanX === inverseX;
}