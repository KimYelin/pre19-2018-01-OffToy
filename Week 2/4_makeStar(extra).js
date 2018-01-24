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
  for (var i = 1; i <= n; i += 1) {//i => 레벨, n => 입력(최종 아래 레벨)
    if (i === Number(n)) {// 레벨이 입력된 n과 같다면
      console.log('*'.repeat(2 * n - 1));// 마지막 레벨 출력
    } else {//그렇지 않으면 1부터 n-1 레벨까지 출력
      var stars = ' '.repeat(n - i) + '*';
      console.log(i === 1 ? stars : stars + ' '.repeat(2 * i - 3) + '*');
    }// 레벨이 1? 맞으면 stars출력: 아니면 ~2i-3(홀수라 2i-1인데 레벨이 1부터 시작해 -3)~ 출력
  }
}*/

makeStar(userInput);
