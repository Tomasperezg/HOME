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
        document.getElementById("NavBar").style.height = "4%";
    }
}

$('.icon').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
});

// this will animate the About page text
$('a.menu').on("click", function(){
$('.weR').hide().fadeIn(5000);
$('.aboutBB').hide().fadeIn(5000);
})

// lightbox function
$('.image').click(function(){
  $('body').toggleClass('LB');
  $('.LB').css({"display": "block"});
  $('.imgLB').css({"display": "block"});
  $('.closeLB').css({"display": "block"});
});

$('.closeLB').click(function(){
  $('body.LB').css({"display": "none"});
  $('body.imgLB').css({"display": "none"});
  $('body.closeLB').css({"display": "none"});
})

// $('.LB').click(function(){
//   $('body.LB').css({"display": "none"});
// });
