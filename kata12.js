//Title: Sum of integers in string
//Link: https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s) {
    let numeros = s.match(/\d+/g); 
    let suma = 0;
  
    if (numeros) {
      for (let numero of numeros) {
        suma += parseInt(numero); 
      }
    }
    return suma;
  }