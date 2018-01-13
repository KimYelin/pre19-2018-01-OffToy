/*Week 2-3 firstReverse
 Using the JavaScript language, have the function FirstReverse(str)take the str parameter being passed and return the string in reversed order.

example 1: firstReverse("codestates"); => "setatsedoc"
example 2: firstReverse("I love codestates"); "setatsedoc evol I"*/

var userInput = prompt("Enter a String:");

function firstReverse(str) { 
  //console.log(str);
  var str2 = str.split('').reverse().join('');
  return str2;
}

console.log(firstReverse(userInput));
