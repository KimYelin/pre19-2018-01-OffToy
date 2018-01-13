/*Week 1-2 sum

Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:

sum(3); // => 6
sum(4); // => 10
sum(5); // => 15*/

function sum(n) {
  var summed = 0;
  for(var i = 0; i<=n; i++)
    summed += i;
  return summed;
}
/* Model Solution
function sum(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) result += i;
  return result;
}
*/
console.log(sum(3)); // => 6
console.log(sum(4)); // => 10
console.log(sum(5)); // => 15
