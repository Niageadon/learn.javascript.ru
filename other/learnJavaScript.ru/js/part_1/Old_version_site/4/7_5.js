/*
Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива
*/

let arr = [];
while (1){
  let value = prompt();
  if (value === null || value === '' || isNaN(value)) break;
  arr.push(value);

}
console.log(arr)
