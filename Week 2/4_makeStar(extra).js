/*Week 2-4 makeStar (extra)
예제를 보고 규칙성을 찾아 별을 찍으세요.

입력 : number Range 0 ~ 10000

Example 1

입력 : 1
출력 :
*


Example 2

입력 : 2
출력 :
 *
***
Example 3

입력 : 3
출력 :
  *
 * *
*****

입력 : 4
출력 :
   *
  * *
 *   *
*******
*/

var userInput = prompt("Enter a number:");
//아닌것 같은데 왜 통과지 => 테스트 케이스 교묘히 피해갈 경우 이래 됨
function makeStar(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 1; j < n - i; j++) {
        console.log(" ");
    }
    for (var k = 0; k < i * 2 - 1 ; k++) {
        console.log("*");
    }
  }
}

//이건 제대로 출력 됨
/*function makeStar(n) {
  for (var i = 1; i <= n; i += 1) {
    if (i === Number(n)) {
      console.log('*'.repeat(2 * n - 1));
    } else {
      var stars = ' '.repeat(n - i) + '*';
      console.log(i === 1 ? stars : stars + ' '.repeat(2 * i - 3) + '*');
    }
  }
}*/

makeStar(userInput);
