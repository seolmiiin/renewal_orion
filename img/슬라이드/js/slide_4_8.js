document.addEventListener('DOMContentLoaded',function(){

  var loadingLine=document.querySelector('#loading-line');
// loadingLine.style.width=currentIndex+1/slideCount +'%';
  var bar=new ProgressBar.Line(loadingLine , {
    easing:'easeInOut',
    duration:3500,
    color:'#eb1925'
  });
  //  bar.animate(loadingLine.style.width);


  var slideWrap=document.querySelector('.container'),
  slides=document.querySelector('.slides'),
  slide=document.querySelectorAll('.slide'),
  slideCount=slide.length,
  currentIndex=0,
  timer=undefined,
  pager=document.querySelector('.pager'),
  pagerBtn=document.querySelectorAll('.pager img'),
  prev=document.getElementById('prev'),
  next=document.getElementById('next');
  
//ul의 너비를 지정해주자.
slides.style.width=slide.length * 100  +'%';
console.log(slides.style.width);//3045px
console.log(slideCount);


//이동함수만들기
function moveToSlide(idx){
slides.classList.add('animated');
slides.style.left= -idx * 100 + '%';
currentIndex=idx;
//bar.animate(idx/slideCount);
bar.animate(0.1666+idx/slideCount);
for(let i=0; i<pagerBtn.length; i++){
pagerBtn[i].classList.remove('active');
slide[i].classList.remove('border');
// bar.animate(i/slideCount);

}
pagerBtn[idx].classList.add('active');
slide[idx].style.opacity='1';

console.log(0.1666+idx/slideCount)

}//end-moveToSlide;

moveToSlide(0);


prev.addEventListener('click',function(e){
e.preventDefault();
if(currentIndex>0){
moveToSlide(currentIndex-1);
}else{
moveToSlide(slideCount-1);
}
});

next.addEventListener('click',function(e){
e.preventDefault();
if(currentIndex<slideCount-1){
moveToSlide(currentIndex+1);
}else{
moveToSlide(0);
}
});


//자동으로 움직이는 함수만들기
function autoSlide(){
timer=setInterval(function(){
 
var nextSlide = (currentIndex + 1) % slideCount;
if(nextSlide<=slideCount-1)
moveToSlide(nextSlide);
else{
  moveToSlide(0);
}

},3000);    
}//autoSlide


autoSlide();


//마우스오버하면 멈추게
//화살표생기게
slideWrap.addEventListener('mouseenter',function(){
clearInterval(timer);
});
slideWrap.addEventListener('mouseleave',function(){
autoSlide();
});


for(let j=0; j<pagerBtn.length; j++){
pagerBtn[j].addEventListener('click',function(e){
console.log(e.target);
var pagerNum=e.target.getAttribute('data-idx');
console.log(pagerNum);
moveToSlide(pagerNum);
});
}















});




