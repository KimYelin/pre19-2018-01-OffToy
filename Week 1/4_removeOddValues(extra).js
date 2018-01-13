/*Week 1-4 removeOddValues

Write a function removeOddValues that takes an object as an argument and returns an object with all key/value pairs removed for which the value holds an odd number.

You'll need to use the "typeof" operator to first check that the values are numbers:

typeof "Hello" // => ?
typeof 3 // => ?*/

function removeOddValues(object) {
  for (var i in object) {
    if (typeof(object[i]) === "number")
      if (object[i] % 2) delete object[i];
  }
  return object;
}
var obj1 = {
  a: 1,
  b: 2,
  c: 3,
  e: 4,
  f: 5
}

var obj2 = {
  name: 'yelin',
  nationality: 'ROK',
  e: 4,
  f: 5
}
console.log(obj1);
console.log(obj2);
console.log('----------------------');
console.log(removeOddValues(obj1));
console.log(removeOddValues(obj2));

//문제 이해를 잘못함. 걍 지우면 되는 거였음. 새로운 데에 추가하는거 ㄴㄴ
/*function removeOddValues(object) {
  //객체를 인자로 받아서 홀수만 가진 객체를 반환

  //객체 내 키를 호출해 value값을 가져와 숫자인지 확인
  //숫자면 홀수인지 확인, 아니면 다음 키로 넘어감
  //홀수면 새로운 객체에 추가 후 기존 객체에서 제거
  //새로운 객체를 리턴

  var new_obj = {

  }

  for(var key in object){
    if(typeof object[key] === 'number' && object[key] % 2){
      new_obj[key] = object[key];
      //delete object[key];
    }
  }
  return new_obj;
}
var obj1 = {
  a: 1,
  b: 2,
  c: 3,
  e: 4,
  f: 5
}

var obj2 = {
  name: 'yelin',
  nationality: 'ROK',
  e: 4,
  f: 5
}
console.log(obj1);
console.log(obj2);
console.log('----------------------');
console.log(removeOddValues(obj1));
console.log(removeOddValues(obj2));
console.log('-----기존 객체에서 delete 실행하면------');
console.log(obj1);
console.log(obj2);*/
