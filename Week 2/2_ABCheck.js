/*Week 2-2 ABCheck
Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once Otherwise return the string false.

For example"lane Borrowed" would result in true because there is exactly three characters between a and BYou should consider about space and capital character.*/

var userInput = prompt("Enter a String:");

function ABCheck(str) {
  //문자열 중 a와 b 사이가 정확이 3일때 true
  //대소문자 포함

  //문자열을 한개씩 분해=>js는 객체형이기 때문에 이미 분해돼있음
  //a와 b사이가 3인지

  //내가 시도해본 것 2 => 통과
  var str2 = str.toLowerCase();
  var result = str2.search(/a...b/); //RegExp(정규표현식)

  if(result > -1)
    return true;
  else
    return false;

  //내가 시도해본 것 1 => 틀림
  // var str2 = str.toLowerCase();
  // for(var i of str2){//여기서 i가 숫자가 아니라 문자임. 그래서 str2[0]이 아니라 str2[l],str2[a] 이렇게 돼 말이 안됨.
  //   if(str2[i] === 'a' && str2[i+4] === 'b')
  //    return true;
  // }
  // return false;

    /* Model Solution
    function start(str) {
      str = str.toLowerCase();
      for (var i = 0; i < str.length; i += 1) {
        if ((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')) {
          return true;
        }
      }
      return false;
    }
    */
}
console.log(ABCheck(userInput));
//console.log(ABCheck("lane Borrow"));
