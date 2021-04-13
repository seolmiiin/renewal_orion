document.addEventListener('DOMContentLoaded',function(){
  
  //1.변수지정
   var slides = document.querySelector('.slides');//ul
       slide = document.querySelectorAll('.slide'), //li
       slideCount = slide.length,//4
       currentIndex=0,
       prev = document.getElementById('prev'), //버튼
       next = document.getElementById('next');
  


  
    //ul.slides너비 확인
    slides.style.width= slide * slide.length + 'px';

//슬라이드 이동 함수
function goToSlide(idx){
  slides.style.left= idx * -100 +'%';
  slides.classList.add('animated');
  currentIndex=idx;
}

goToSlide(0);//호출

//버튼
  prev.addEventListener('click',function(e){
    e.preventDefault(); //a링크방지
    if(currentIndex>0){
      goToSlide(currentIndex-1);
    }else{
      goToSlide(slideCount-1);
    }
    
    console.log('prev'+currentIndex);
  });//end-prev

  next.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex>=slideCount-1){
      goToSlide(0);
    }else{
      goToSlide(currentIndex+1);
    }
    
    console.log('next'+currentIndex);
  });//end-next
    
  
  //슬라이드 자동으로 움직이게
  function showNext(){
    var nextIndex = (currentIndex + 1) % slideCount ;
    for(let i=0; i<slideCount-1; i++){
     currentIndex++;
    }
 slides.classList.add('animated');
 slides.style.left= nextIndex*-100+'%';
 currentIndex=nextIndex;
  }
 
   setInterval(showNext,3500);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      });//전체document
  