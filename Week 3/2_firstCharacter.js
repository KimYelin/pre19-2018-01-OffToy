/*In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string

Example 1: makeString("The community at Code States might be the biggest asset"); => "TcaCSmbtba"*/

var userInput = prompt("Enter a String:");

var makeString = function(s) {
  //스페이스로 단어 분리
  //배열 요소의 인덱스 0인 글자를 새로운 배열에 push

  var arr = s.split(" ");
  var fC_arr = [];

  for (var i = 0; i < arr.length; i++) {
    fC_arr.push(arr[i].charAt(0));
  }

  return fC_arr.join("");
}

console.log(makeString(userInput));


/* Model Solution
var userInput = prompt("Enter a String:");

var makeString = function(s) {
  var words = s.split(' ');
  var result = '';
  for (var i = 0; i < words.length; i += 1) {
    result += words[i][0] || '';
  }
  return result;
}

console.log(makeString(userInput));*/
