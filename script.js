//this will keep the sticky navbar (not working at this moment)
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("NavBar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

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
$('.centered').hide().fadeIn(1500);
$('#SlideShow').hide().fadeIn(5000);


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
// responsive NavBar when on phone version
function openNav() {
    var x = document.getElementById("NavBar");
    if (x.className === "topnav") {
        document.getElementById("NavBar").style.height = "100%";
        x.className += " responsive";
    } else {
        x.className = "topnav";
        document.getElementById("NavBar").style.height = "60px";
    }

  $('.menua').click(function() {
  $('.topnav').slideToggle('slow');
});

}

// this will animate the About page text
$('a.menu').on("click", function(){
$('.weR').hide().fadeIn(3000);
$('.aboutBB').hide().fadeIn(3000);
})

// lightbox function
$(document).ready(function(){
    $('.image').click(function(){
      $('.closeLB').css({"display": "block"});
      $('.LB').css({
      "display": "block",
      "background-color": "black",
      "position": "inherit",
      "width": "100%",
      "height": "840px",
      "z-index": "1",
      "opacity": "0.9",
    });
    $(".LB").focus();
    });
    $(".closeLB").click(function(){
    $(".LB").hide(1000);
    $(".closeLB").hide(1000);
  });
});
// lightbox images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("LBImage");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
$('.closeLB').click(function() {
$('.LB').slideToggle('slow');
});
