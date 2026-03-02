'use strict';


function factorial(n) {
  // ваш код...
if (!(Number.isInteger(n)  &&  n >= 0))  {      //проверка на число и положительность
  console.log('Необходимо положительное целое число');
  return; }
if ((n===0)|| (n===1)) {           //Если 0 или 1, сразу ответ = 1
  return 1; }
  
let res=n;
while (n>1)  {
   
  res=res*(n-1);
  n--;
 }
return res;
}
