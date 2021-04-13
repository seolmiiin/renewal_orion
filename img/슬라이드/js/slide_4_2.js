document.addEventListener('DOMContentLoaded',function(){

  //변수지정
  var slides=document.querySelector('.slides'),
      slide=document.querySelectorAll('.slide'),
      slideCount=slide.length,
      slideWidth=300,
      slideMargin=5,
      currentIndex=0,
      prev=document.getElementById('prev'),
      next=document.getElementById('next');
      
//ul의 너비를 지정해주자.
slides.style.width=slide.length * (slideWidth + slideMargin)-5 +'px';
//console.log(slides.style.width);//3045px

//이동함수만들기
function moveToSlide(idx){
  slides.classList.add('animated');
  slides.style.left= -idx * (slideWidth+slideMargin) + 'px';
  currentIndex=idx;
  
  console.log(currentIndex);
}

moveToSlide(0);


prev.addEventListener('click',function(e){
  e.preventDefault();
if(currentIndex>0){
  moveToSlide(currentIndex-1);
}else{
  moveToSlide(slideCount-3);
}
});

next.addEventListener('click',function(e){
  e.preventDefault();
  if(currentIndex<slideCount-3){
    moveToSlide(currentIndex+1);
  }else{
    moveToSlide(0);
  }
});











});//전체DOM-end
