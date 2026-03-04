/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
const hasSpace = /\s/.test(name);  // true, если есть пробелы
if ((hasSpace)||(name.length<4))  {  //если есть пробелы или длина имени меньше 4 - ответить алертом и выйти из функции
  alert('Имя пользователя от 4 символов, без пробелов!');
  return;
}
return true; //Раз предыдущие строки пройдены, то всё верно и можно вернуть True
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
