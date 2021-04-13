document.addEventListener('DOMContentLoaded', function(){
  //1.변수지정
  var slidesWrap=document.querySelector('.container'),
  slides = document.querySelector('.slides'), 
  slide = document.querySelectorAll('li.slide'),
  slideCount = slide.length,
  currentIndex=0,
  prev=document.querySelector('#prev'),
  next=document.querySelector('#next'),
  timer = undefined; //이름은 있는데 아직 값이 없다.

  

  //2.슬라이드이동함수
  function moveSlide(idx){
    slides.classList.add('animated');
    slides.style.left=idx * -100 +'%';
    currentIndex=idx;
   }

   //3. 버튼클릭하면 슬라이드 이동시키기
  prev.addEventListener('click',function(e){
    e.preventDefault(); //중요 막아줘야 작용
    if(currentIndex>0){
      moveSlide(currentIndex-1);
    }else{
      moveSlide(slideCount-1);
    }
  });
  next.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex>=slideCount-1){
      moveSlide(0);
    }else{
      moveSlide(currentIndex+1);
    }
  });



    


//4. 자동으로 슬라이드 움직이게 하는 함수는 setInterval에 담아줘야
//실행가능

// function autoMove(){
//   var nextIndex = (currentIndex+1)%slideCount;
//   slides.style.left=nextIndex*-100+'%';
//   currentIndex=nextIndex;
//   slides.classList.add('animated'); 
// }

//5.  4.를 setInterval안에 담기.
// var timer=setInterval(function(){
//   var nextIndex = (currentIndex+1)%slideCount;
//   moveSlide(nextIndex);
// },1500);

//이타이머는 함수가 아니라서 재사용이 안된다.
//그래서 함수로 만들어줘야한다.
//6.
//위에 변수로 담아놓은 timer를 startAutoSlide함수안에 집어넣는다.
function startAutoSlide(){
  // var timer=setInterval(function(){
     timer=setInterval(function(){
    var nextIndex = (currentIndex+1)%slideCount;
    moveSlide(nextIndex);
  },1500);
}
//7. 호출해준다.
startAutoSlide();
//8. 지금 timer은 지역변수로 바꼈다. 지역변수가 아니라 글로벌변수로 만들어주자
// 1.로 가서 변수로 선언해주자. var timer=undefined
//9. timer가 전역변수가 됬으니 startAutoSlide함수안에 timer에 var지우기


//11.멈추는 함수도 만들어보자
function stopAutoSlide(){
  clearInterval(timer);
}

slidesWrap.addEventListener('mouseenter',function(){
  stopAutoSlide()
  //clearInterval(timer);
  console.log('mouseenter clear'+timer);
});
slidesWrap.addEventListener('mouseleave',function(){
  startAutoSlide();  //10.
  console.log('mouseleave set'+timer);
  });

});//전체
