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
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementsByClassName('ThePcImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
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


$('#TheHomeInfo').hide().fadeIn(2500);
