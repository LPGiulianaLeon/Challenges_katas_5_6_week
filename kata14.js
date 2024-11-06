//Title: Sum of Odd Numbers
//Link: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
	let firstNumber = (n*(n-1))+1;
	let row = [];
	let suma = 0;

	for (let i = 0; i < n; i++) {
		suma += firstNumber;
		firstNumber +=2;
	}
	return suma;
}   

