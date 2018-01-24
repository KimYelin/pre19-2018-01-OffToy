/*2007년 1월 1일은 월요일이다.
2007년 a월 b일은 무슨 요일일까?

hint : 2007년에서 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일 까지 있다.

출력형식 : SUN, MON, TUE, WED, THU, FRI, SAT

For example, if x = 1, y = 1

input : "1 1"
output : MON*/

var userInput = prompt("Enter a string:");
// "x y"  : 1 <= x <= 12, 1 <= y <= 31

function findDay(userInput) {
  var day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  var month_day = userInput.split(" ");
  var sum = 0;

  for(var i = 1; i < month_day[0] ; i++ ){
    if(i === 1 || i === 3 ||
       i === 5 || i === 7 ||
       i === 8 || i === 10 ||
       i === 12)
      sum += 31;
    else if(i === 2)
      sum += 28;
    else
      sum += 30;
  }

  sum += Number.parseInt(month_day[1]);

  return day[sum % 7];

}

console.log(findDay(userInput));

/* Model Solution
function day(userInput) {
  var months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var date = userInput.split(' ');
  var sum = Number(date[1]);

  for (var i = 1; i < date[0]; i += 1) {
    sum += months[i];
  }

  return days[sum % 7];
}*/
