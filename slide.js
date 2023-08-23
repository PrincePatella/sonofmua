// slideshow1.js

function showSlide(index) {
  const slides = document.getElementsByClassName("mySlides");
  
  if (index < 1) {
    slideIndex = slides.length;
  } else if (index > slides.length) {
    slideIndex = 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

