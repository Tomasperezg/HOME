//this is the function of the SlideShow
var SlideIndex = 0;
ShowSlides();

function ShowSlides(){
  var i;
  var slides = document.getElementsByClassName('SlidePic');
  for(i = 0 ; i < slides.length; i++ ){
    var dots = document.getElementsByClassName("dot");
    slides[i].style.display = "none";
  }
  SlideIndex++;
  if(SlideIndex > slides.length)
  {SlideIndex = 1}
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
}
  slides[SlideIndex-1].style.display = "block";
    dots[SlideIndex-1].className += " active";
    setTimeout(ShowSlides, 3000);
}
//this is jquery for text and picture fade animation
$('.centered').hide().fadeIn(5000);
$('#SlideShow').hide().fadeIn(1500);


//This will animate when NavBar redirect to a link
$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

$('a #NavBar').click(function(){
    $(this).addClass("act");
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("GoBackBT").style.display = "block";
  } else {
    document.getElementById("GoBackBT").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
$(document).ready(function() {
    $("#GoBackBT").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

// this will animate the About page text
$('a.menu').on("click", function(){
$('.weR').hide().fadeIn(3000);
$('.aboutBB').hide().fadeIn(3000);
});

// This is for the Testimonials Page Will allow only 3 slides for UI/UX
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot_1");
  if (n > slides.length) {
    slideIndex = 1;
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

  if(SlideIndex > slides.length){
    SlideIndex = 1;
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[SlideIndex-1].style.display = "block";
    dots[SlideIndex-1].className += " active";
    setTimeout(ShowSlides, 3000);
  }
