import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
    this.scrolling();
    this.selectCategory();
  }

  render() {
    const ribbon = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner">
          ${this.categories.map(category => `
            <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
          `).join('')}
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `);
    
    return ribbon;
  }
  scrolling() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    
    ribbonArrowLeft.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    });
    
    ribbonArrowRight.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    });
    
    ribbonInner.addEventListener('scroll', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      
      if (scrollLeft === 0) {
        ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }
      
      if (scrollRight < 1) {
        ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
    });
  }
  
  selectCategory() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let ribbonItems = this.elem.querySelectorAll('.ribbon__item');
    
    ribbonInner.addEventListener('click', (event) => {
      let target = event.target.closest('.ribbon__item');
      if (!target) {
        return;
      }
      
      event.preventDefault();
      
      ribbonItems.forEach(item => item.classList.remove('ribbon__item_active'));
      target.classList.add('ribbon__item_active');
      
      let categoryId = target.dataset.id;
      let customEvent = new CustomEvent('ribbon-select', {
        detail: categoryId,
        bubbles: true
      });
      this.elem.dispatchEvent(customEvent);
    });
  }
}
