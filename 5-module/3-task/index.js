 function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let slides = document.querySelectorAll('.carousel__slide');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let rightArrow = document.querySelector('.carousel__arrow_right');
  
  let currentIndex = 0;
  let totalSlides = slides.length;
    
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

}
