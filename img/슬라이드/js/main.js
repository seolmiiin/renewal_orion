$(function () {
  var slides = $('.slideshow img'),
  slideCount = slides.length;
  console.log(slideCount);
  currentIndex = 0;

slides.eq(0).fadeIn();
var timer = setInterval(showNext,1500);


function showNext(){
  var nextIndex = (currentIndex + 1) % slideCount ;
  slides.eq(currentIndex).fadeOut();
  slides.eq(nextIndex).fadeIn();
  currentIndex = nextIndex;
}
slides.mouseover(function(){
  clearInterval(timer);
  })
  .mouseout(function(){
    setInterval(showNext,3500);
  
  });
});
