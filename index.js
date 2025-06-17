const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.suiv');
const prevButton = document.querySelector('.prece');

let currentIndex = 0; 


function showSlide(index) {
 
  slides.forEach((slide) => slide.classList.remove('active'));

  
  slides[index].classList.add('active');
}


nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; 
  }
  showSlide(currentIndex);
});


prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; 
  }
  showSlide(currentIndex);
});


showSlide(currentIndex);
