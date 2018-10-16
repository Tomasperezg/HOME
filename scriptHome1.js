// home1 SlideShow
var slideIndex = 1;
ShowPic(slideIndex);

function plusSlides(n) {
  ShowPic(slideIndex += n);
}

function currentSlide(n) {
  ShowPic(slideIndex = n);
}

function ShowPic(n) {
  var i;
  var slides = document.getElementsByClassName("ThePics");
  var dots = document.getElementsByClassName("TheThPic");
  var captionText = document.getElementsByClassName("TheCaption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
