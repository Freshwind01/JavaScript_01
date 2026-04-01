import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
      <div class="carousel__inner">
        ${this.slides.map(slide => `
          <div class="carousel__slide" data-id="${slide.id}">
            <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.initCarousel();
    this.add_product();
  }
    
  initCarousel() {
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let leftArrow = this.elem.querySelector('.carousel__arrow.carousel__arrow_left');
    let rightArrow = this.elem.querySelector('.carousel__arrow.carousel__arrow_right');
    let currentIndex = 0;
    let totalSlides = this.slides.length;
    function updateCarousel() {
      let slideWidth = carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    
      leftArrow.style.display = (currentIndex === 0) ? 'none' : 'flex';
      rightArrow.style.display = (currentIndex === totalSlides - 1) ? 'none' : 'flex';
    }
  
    leftArrow.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    rightArrow.addEventListener('click', function() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    updateCarousel();
  }

add_product() {
    this.elem.addEventListener('click', (event) => {
      let button = event.target.closest('.carousel__button');
      if (button) {
        let slideElem = event.target.closest('.carousel__slide');
        
        let slideId = slideElem.dataset.id;
        
        let slide = this.slides.find(s => s.id === slideId);
        
        let customEvent = new CustomEvent("product-add", { 
          detail: slide.id,
          bubbles: true 
        });
        this.elem.dispatchEvent(customEvent);
      }
    });
  }
}
