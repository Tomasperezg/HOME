//this will keep the sticky navbar (not working at this moment)
// window.onscroll= function () {
//   myFunction()
// };
// var navbar = document.getElementById('NavBar');
// var sticky = navbar.offsetTop;
//
// function myFunction(){
//   if(window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   }
//   else{
//     navbar.classList.remove("sticky");
//   }
// }
// this is a button that will scroll you to the top of the page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }

}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // this part of the code works when after }; is commented out, but has problems
  $('#myBtn').click( function(scrollFunction){
      $('html, body').animate({scrollTop: 0}, 'slow');
  });
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
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
$('.centered').hide().fadeIn(7500);
$('#SlideShow').hide().fadeIn(5000);


//This will animate when NavBar redirect to a link
$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

//for the form to work
var form = $('#form'); //form id here
form.submit(function(event) {
event.preventDefault();
var form_status = $('<div class="form_status"></div>');
var $form = $(this);
$.ajax({
type: 'POST',
url: "form.php",
data: {
Name: $("#name").val(),
Email: $("#email").val(),
Message: $("#message").val()
},
beforeSend: function() {
form.append(form_status.html('Email is sending...').fadeIn());
}
}).done(function(data) {
form_status.html('Email Sent!').delay(3210).fadeOut();
});
//delete messages when submit
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
});
