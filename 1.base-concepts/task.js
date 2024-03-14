"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b*b - 4*a*c;
  if(discriminant < 0) {
    arr.push();
  } else if(discriminant === 0) {
    arr.push(-b/(2*a));
  } else {
    let root1 = (-b + Math.sqrt(discriminant))/(2*a);
    let root2 = (-b - Math.sqrt(discriminant))/(2*a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent/1200;
  let s = amount - contribution;
  let monthsPayment = s * (p + p/(((1 + p) ** countMonths)-1));
  let totalAmount = monthsPayment * countMonths;
  
  return totalAmount.toFixed(2);
  
}