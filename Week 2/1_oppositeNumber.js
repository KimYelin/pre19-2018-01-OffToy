/*Week 2-1 oppositeNumber
Very simple, given a number, find its opposite.

 Examples:

 1: -1
 14: -14
 -34: 34
 But can you do it in 1 line of code and without any conditionals?*/

var userInput = prompt("Enter a number:");

function opposite(number) {
  //조건문 없이 한 줄로 보수 취하기
  return -number;
}

console.log(opposite(userInput));
