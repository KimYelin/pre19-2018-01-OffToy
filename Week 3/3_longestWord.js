/*Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
 If there are two or more words that are the same length, return the first word from the string with that length.       Assume sen will not be empty.

Example 1: longestWord("I love codestates"); // => "codestates"
Example 2: longestWord("Teamwork skills will take you anywhere"); // => "Teamwork"*/

var userInput = prompt("Enter a String:");

var longestWord = function(sen) {
  // 스페이스로 문장 분리
  // 배열의 요소의 길이가 긴 걸 리턴 값에 넣음
  // 길이가 같으면 첫번째 단어 리턴
  /*var string = sen.split(" ");// => 내가 한거 통과 못함
  var longest = [];

  for (var i = 0; i < string.length; i++){
      if (longest.length < 0) {
          longest.push(string[i]);
      }
      else if (string[i].length > longest.length) {
          longest = [];
          longest.push(string[i]);
      }
    }
    return longest[0];*/

  // 패턴에 맞는 문자열을 찾는 정규표현식을 사용해 문자열의 배열을 리턴
  // 이 경우 a-z, 0-9 사이의 글자로 이루어진 단어가 패턴이며 구두점은 제외한다.n
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z0-9]+/gi);

  // sort 함수는 함수를 인자로 받으며 이 함수는
  // 배열의 각각의 요소를 그 다음 요소와 비교하는데 쓰인다.
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // sorted는 내림차순으로 정렬된 단어의 배열이다.
  // 따라서 첫번째 요소를 리턴한다.
  return sorted[0];
}

console.log(longestWord(userInput));

/* Model Solution
var userInput = prompt("Enter a String:");

var longestWord = function(sen) {
  var words = sen.split(' ');
  var longest = words[0];
  for (var i = 1; i < words.length; i += 1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord(userInput));*/
