import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
   
    // Проверяем, видна ли корзина (offsetHeight === 0, если корзина скрыта через display: none)
    if (!this.elem.offsetHeight) return;

    // На мобильных устройствах (ширина <= 767px) не перемещаем корзину
   
    if (document.documentElement.clientWidth <= 767) {
      // Сбрасываем inline-стили к значениям по умолчанию
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      });
      return;
    }

    // Сохраняем начальную координату верхнего края корзины
    
    if (!this.initialTopCoord) {
      
      this.initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;
    }

     if (window.pageYOffset > this.initialTopCoord) {
      // Вычисляем горизонтальное смещение (left) для плавающей корзины
      // Берём минимальное из двух значений:
      // 1) Позиция справа от контейнера + 20px отступ
      // 2) Ширина окна - ширина корзины - 10px отступ от правого края
      let leftIndent = Math.min(
        document.querySelector('.container').getBoundingClientRect().right + 20,
        document.documentElement.clientWidth - this.elem.offsetWidth - 10
      );
     Object.assign(this.elem.style, {
        position: 'fixed', 
        top: '50px', 
        zIndex: 1000, 
        left: leftIndent + 'px' 
      });
    } else {
      Object.assign(this.elem.style, {
        position: '',
        top: '',
        left: '',
        zIndex: ''
      });
    }
  }
  }
