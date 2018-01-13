/*
Week 1-1 isOdd

Write a function called 'isOdd'.

Given an integer, 'isOdd' returns whether the integer is odd or not.*/

function isOdd(num) {
  /*if(num % 2 === 1)
    return true;
  else
    return false;*/
  return (num % 2 !== 0);// 0이면 짝수=> 0이 아니면 !==0은 1은 true다!
}

var output1 = isOdd(42);
console.log(output1); // --> false

var output2 = isOdd(19);
console.log(output2); // --> true
