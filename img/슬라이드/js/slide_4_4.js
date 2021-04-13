document.addEventListener('DOMContentLoaded',function(){

  //변수지정

  var slideWrap=document.querySelector('.container'),
      slides=document.querySelector('.slides'),
      slide=document.querySelectorAll('.slide'),
      slideCount=slide.length,
      slideWidth=300,
      slideMargin=5,
      currentIndex=0,
      timer=undefined,
      pager=document.querySelector('.pager'),
      pagerBtn=document.querySelectorAll('.pager span');
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
  for(let i=0; i<pagerBtn.length; i++){
    pagerBtn[i].classList.remove('active');
  }
  pagerBtn[idx].classList.add('active');
 }//end-moveToSlide;

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


//자동으로 움직이는 함수만들기
function autoSlide(){
  timer=setInterval(function(){
    
    var nextSlide = (currentIndex + 1) % slideCount;
   if(nextSlide<=slideCount-3)
    moveToSlide(nextSlide);
    else{
      moveToSlide(0);
    }
  
    },2000);    
}//autoSlide


autoSlide();

//마우스오버하면 멈추게
slideWrap.addEventListener('mouseenter',function(){
clearInterval(timer);
});
slideWrap.addEventListener('mouseleave',function(){
  autoSlide();
  });


for(let j=0; j<pagerBtn.length; j++){
  pagerBtn[j].addEventListener('click',function(e){
    //console.log(e.target);
    var pagerNum=e.target.innerText;
    //console.log(pagerNum);
    moveToSlide(pagerNum);
  });
}




});//전체DOM-end
