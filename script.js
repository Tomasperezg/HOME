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
    setTimeout(ShowSlides, 5000);
}
//this is jquery for text and picture fade animation
tex = 'old homes, reimagined';
$('.centered').hide().fadeIn(1500).promise().done(function typeEffect (){
// test
  console.log("Text was loaded");
    var container = $(".centered2");
    container.html(tex).hide().fadeIn(500);
});

$('#SlideShow').hide().fadeIn(1000);


//This will animate when NavBar redirect to a section of the page
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


$('img.image').on("click", function(){
  console.log("Image was clcked");
  var box = $('.ProjectBox');
  box.removeClass('hide');
});
$('.X').on("click", function(){
  console.log("X was clicked");
  $('.ProjectBox').hide(1000);
});




// This is for the Testimonials Page
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
  var TestSlides = document.getElementsByClassName("mySlides");
  var Testdots = document.getElementsByClassName("dot_1");
  if (n > TestSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = TestSlides.length
  }
  for (i = 0; i < TestSlides.length; i++) {
      TestSlides[i].style.display = "none";
  }
  for (i = 0; i < Testdots.length; i++) {
      Testdots[i].className = Testdots[i].className.replace(" active", "");
  }

  if(SlideIndex > TestSlides.length){
    SlideIndex = 1;
  }
  for(i = 0; i < Testdots.length; i++) {
    Testdots[i].className = Testdots[i].className.replace("active", "");
  }
  TestSlides[SlideIndex-1].style.display = "block";
    Testdots[SlideIndex-1].className += " active";
  }
