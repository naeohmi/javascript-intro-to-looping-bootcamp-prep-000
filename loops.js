function forLoop(array) {
  // var array = [];
  for (var i = 1; i < 26; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`);
    } else {
     array.push(`I am ${i} strange loops.`);
    }
  } return array
  }
var n = 100;
function whileLoop(n){
  while (n > 0) {
    console.log(--n);
  } return "done";
}
function doWhileLoop(array){
  do {
  array.shift()
  } while (array.length);
  return array;
}
