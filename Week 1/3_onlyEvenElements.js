/*Week 1-3 onlyEvenElements

Given an array of numbers, onlyEvenElements
returns a new array of just the even numbers.*/

function onlyEvenElements(array) {
  var arr = [];
  var a = 0;
  for(var i of array){
    if(array[i] % 2 === 0){//if (!(array[i] % 2)) 짝수면 !0 => 1로 true, 홀수면 !1 => 0 으로 false
      arr[a] = array[i]; //굳이 a 변수 생성 없이 push를 써서 바로 넣으면 됨.
      a++;
    }
  }
  return arr;
}
/* Model Solution
function onlyEvenElements(array) {
  var result = [];
  for (var i = 0; i < array.length; i++)
    if (!(array[i] % 2)) result.push(array[i]);
  return result;
}
*/

console.log(onlyEvenElements([1,2,3,4,5]));
