/*Find out "B"(Bug) in a lot of "A"(Apple).
 There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
 input: [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]]*/

var userInput = prompt("Enter a 2-dimensional Array:");

var bugInApple = function(str) {
  var apple = eval(str);          // string str to array. Use apple variable!! (it's array type)

  var result = [];

  for ( var i = 0; i < apple.length ; i++) {
    for ( var j = 0; j < apple[i].length ; j++) {
      if (apple[i][j] === "B") {
        result.push(i,j);
        //result.push(j); 이렇게 해도 됨
      }
     }
  }
  return result;
}

console.log(bugInApple(userInput));

/* Model Solution
var userInput = prompt("Enter a 2-dimensional Array:");

var bugInApple = function(str) {
  var apple = eval(str);          // string str to array. Use apple variable!! (it's array type)
  for (var i = 0; i < apple.length; i += 1) {
    for (var j = 0; j < apple[0].length; j += 1) {
      if (apple[i][j] === 'B') {
        return [i, j];
      }
    }
  }
}

console.log(bugInApple(userInput));*/
