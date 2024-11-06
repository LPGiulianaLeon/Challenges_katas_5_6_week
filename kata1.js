//Title: Number of People in the Bus
//Link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops) {
    let totalPeople = 0;
  
    for (let [a, b] of busStops) {
      totalPeople += a; 
      totalPeople -= b; 
    }
  
    return totalPeople;
  };