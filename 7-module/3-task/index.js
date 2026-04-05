export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.elem = document.createElement('div');
    this.elem.className = 'slider';
    //Создает ДОМ-структуру слайдера
    let stepsHtml = '';
    for (let i = 0; i < steps; i++) {
      let activeClass = i === value ? ' class="slider__step-active"' : '';
      stepsHtml += `<span${activeClass}></span>`;
    }

    this.elem.innerHTML = `
      <div class="slider__thumb" style="left: ${(value / (steps - 1)) * 100}%;">
        <span class="slider__value">${value}</span>
      </div>
      <div class="slider__progress" style="width: ${(value / (steps - 1)) * 100}%;"></div>
      <div class="slider__steps">${stepsHtml}</div>
    `;
    //Находит все элементы шагов
    this.stepsElements = this.elem.querySelectorAll('.slider__steps span');
    console.log(this.stepsElements);
    //Добавляет обработчик клика, обрабатывается клик по всей области слайдера
    this.elem.addEventListener('click', (e) => {
      let slider = e.currentTarget;
      let sliderWidth = slider.offsetWidth;
      let clickX = e.clientX - slider.getBoundingClientRect().left;
      let newValue = Math.round(clickX / sliderWidth * (this.steps - 1));

      this.setValue(newValue);

      slider.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }));
    });
  }

  setValue(value) {
    this.value = value;
    this.elem.querySelector('.slider__value').textContent = value;
    this.elem.querySelector('.slider__thumb').style.left = `${(value / (this.steps - 1)) * 100}%`;
    this.elem.querySelector('.slider__progress').style.width = `${(value / (this.steps - 1)) * 100}%`;

    this.stepsElements.forEach((step, index) => {
      if (index === value) {
        step.classList.add('slider__step-active');
      } else {
        step.classList.remove('slider__step-active');
      }
    });
  }
}
