/*
Что выведет этот код?

var a = 1;

var obj = {
  b: 2
};

with(obj) {
  var b;
  alert( a + b );
}
 */

console.log('"3", т.к. любое обращение к переменной внутри with сначала ищет её среди свойств obj, а только потом – вне with.')
