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
    let thumb = this.elem.querySelector('.slider__thumb');
    thumb.ondragstart = () => false;
    this.thumb = thumb; 
    //Находит все элементы шагов
    this.stepsElements = this.elem.querySelectorAll('.slider__steps span');
    
    // Drag-and-Drop с Pointer Events
    thumb.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.elem.classList.add('slider_dragging');

      const onPointerMove = (event) => {
        event.preventDefault();

        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / this.elem.offsetWidth;

        if (leftRelative < 0) {
          leftRelative = 0;
        }

        if (leftRelative > 1) {
          leftRelative = 1;
        }

        let leftPercents = leftRelative * 100;

        thumb.style.left = `${leftPercents}%`;
        this.elem.querySelector('.slider__progress').style.width = `${leftPercents}%`;

        // Вычисляем значение
        let segments = this.steps - 1;
        let approximateValue = leftRelative * segments;
        let value = Math.round(approximateValue);

        // Обновляем отображение значения и активный шаг
        if (this.value !== value) {
          this.value = value;
          this.elem.querySelector('.slider__value').textContent = value;

          this.stepsElements.forEach((step, index) => {
            if (index === value) {
              step.classList.add('slider__step-active');
            } else {
              step.classList.remove('slider__step-active');
            }
          });
        }
      };

      const onPointerUp = () => {
        this.elem.classList.remove('slider_dragging');
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);

        // Устанавливаем ползунок на ближайший шаг
        this.setValue(this.value);

        // Генерируем событие
        this.elem.dispatchEvent(new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true
        }));
      };

      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp);
    });

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
