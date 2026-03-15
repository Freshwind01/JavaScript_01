let calculator = {
  read(a,b) {
    this.a = a; //prompt('Введите число a', 0);
    this.b = b; //prompt('Введите число b', 0);
     },
  sum() {
    return this.a+this.b;
        },
  mul() {
    return this.a*this.b;
  }       
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
