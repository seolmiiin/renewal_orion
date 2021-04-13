document.addEventListener('DOMContentLoaded', function(){
    
  
  
  
  //progress
    var loadingLine=document.querySelector('#loading-line');
    // loadingLine.style.width=currentIndex+1/slideCount +'%';
      var bar=new ProgressBar.Line(loadingLine , {
        easing:'easeInOut',
        duration:4500,
        color:'#eb1925'
      });
     
  
 
  
  
  //1.변수지정
  var slidesWrap=document.querySelector('.slide-container'),
  slides = document.querySelector('.slides'), 
  slide = document.querySelectorAll('li.slide'),
  slideCount = slide.length,

  slideHeight = 0,
  currentIndex=0,
  prev=document.querySelector('#prev'),
  next=document.querySelector('#next'),
  $pager = document.querySelector('.pager'),
  $pagerBtn = document.querySelectorAll('.pager span'),
  timer = undefined,
  $slideNum=document.querySelector('#slideNum'),
  $cNum=document.querySelector('#cn'),
  $aNum=document.querySelector('#an'); 

  console.log(slideCount);
  bar.animate(1/slideCount);
  
  console.log('1/slideCount'+ 1/slideCount);

  $aNum.textContent=slideCount;
  
  
  //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
       for(var i = 0; i < slideCount ; i++){
        if(slideHeight < slide[i].offsetHeight){
             slideHeight = slide[i].offsetHeight;
        }
     }
    // console.log('slideheight는'+slideHeight);



  //슬라이드이동함수
  function moveSlide(idx){
    slides.classList.add('animated');
    slides.style.left=idx * -100 +'%';

    currentIndex=idx;
   bar.animate(0.2+idx/slideCount);
  
    for(var j=0; j<$pagerBtn.length; j++){
      $pagerBtn[j].classList.remove('active'); 
      // $pagerBtn[j].innerText='☆';
      
           }
      $pagerBtn[idx].classList.add('active'); 
      // $pagerBtn[idx].innerText='★';
      $cNum.innerText=[idx*1+1];
   console.log('idx'+idx);
   if(idx==3||idx==4){
    $slideNum.style.color="#333";
   
   }else{
    $slideNum.style.color="#fff";
   }

   }//moveSlide



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

//자동슬라이드
function startAutoSlide(){
     timer=setInterval(function(){
    var nextIndex = (currentIndex+1)%slideCount;
    moveSlide(nextIndex);
  },4500);
}

startAutoSlide();



function stopAutoSlide(){
  clearInterval(timer);
}
//마우스오버하면 멈추게
//화살표생기게
prev.style.opacity='0';
next.style.opacity='0';
slidesWrap.addEventListener('mouseenter',function(){
  stopAutoSlide()
  prev.style.opacity='1';
next.style.opacity='1';
});
slidesWrap.addEventListener('mouseleave',function(){
  startAutoSlide(); 
  prev.style.opacity='0';
  next.style.opacity='0';
  });


for(var i=0; i<$pagerBtn.length; i++){
  //console.log( $pagerBtn[i]);
  $pagerBtn[i].addEventListener('click',function(e){
   var pagerNum= e.target.getAttribute('data-idx');
   moveSlide(pagerNum);

  });//click
 }//큰 for






 



 let studios = document.querySelector('ul#ori-studio');
 let youtu =document.querySelectorAll('ul#ori-studio li');
 let yCount=youtu.length;
 let yCurrent=0;
 let yWidth=document.querySelector('#ori-studio li').getBoundingClientRect().width;
 let yMargin=50;
 let yLeft=document.querySelector('#stu-left');
 let yRight=document.querySelector('#stu-right');
 let yTimer=undefined;
 let yText=document.querySelectorAll('#youtu-text p');
 let stuVideo=document.querySelector('#stu-video');
 let $video=document.querySelector('#stu-video iframe');
 
 // console.log(yText);
 // console.log(yCount);
 console.log('width'+yWidth);
 console.log(yWidth+yMargin);
 console.log($video.getAttribute('src'));
 
 //ul너비
 studios.style.width=(yWidth+yMargin)*yCount-yMargin+'px';
 console.log('ul'+studios.style.width);
 
 //text
 
 for(let i=0; i<yCount; i++){
 let text=yText[i].dataset.idx=i;
 let $li=youtu[i].dataset.idx=i;
 }
 // console.log(yText);
 yText[0].style.opacity='1';
 
 //이동함수
 function moveYoutu(idx){
 studios.classList.add('.animate')
  studios.style.left=-idx*(yWidth+yMargin)+'px';
  yCurrent=idx;
       for(let i=0; i<yText.length; i++){
       yText[i].style.opacity='0';
       yText[i].classList.remove('active');
       }
  
  yText[idx].style.opacity='1';
  yText[idx].classList.add('active');
 }
 
 yRight.addEventListener('click',function(){
   if(yCurrent<yCount-1){
     moveYoutu(yCurrent+1)
   }else{
     moveYoutu(0);
   }
 })
 yLeft.addEventListener('click',function(){
   if(yCurrent>0){
     moveYoutu(yCurrent-1)
   }else{
     moveYoutu(yCount-1);
   }
 })
 
 
 function autoYoutu(){
   yTimer=setInterval(function(){
     let nextY=(yCurrent+1)%yCount;
     moveYoutu(nextY);
   },4000);
 }
 function stopYoutu(){
   clearInterval(yTimer);
 }
 
 
 studios.addEventListener('mouseover',function(){
   stopYoutu();
 
 });
 studios.addEventListener('mouseleave',function(){
   autoYoutu();
 });
 
  autoYoutu();
 
 //모달
 youtu.forEach(function(ele){
   ele.addEventListener('click',function(e){
     e.preventDefault();
     stuVideo.style.display='block';
     $video.setAttribute('src',ele.dataset.box);
   });
 });
 
 
 stuVideo.addEventListener('click',function(){
 this.style.display='none';
 });
 



// // 캐러우셀슬라이드

// ///////////////////////////////////

const carousel = ($container, images) => {
  // 현재 표시중인 슬라이드의 인덱스. 슬라이드의 인덱스가 0 또는 images.lenth + 1이면 클론 슬라이드다.
  let currentSlide = 0;
  // 현재 transition 중인지 여부
  let isMoving = false;
  // transiton duration(ms)
  const DURATION = 500;

  const timerId = null;
  let $carouselSlides = null;

  // currentSlide를 기준으로 carousel-slides 요소를 이동시킨다.
  const move = (currentSlide, duration = 0) => {
    // duration이 0이 아니면 transition이 시작된다. isMoving은 transionend 이벤트가 발생하면 false가 된다.
    if (duration) isMoving = true;
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  };

  // Event bindings
  
    // images 배열의 앞뒤에 클론 슬라이드를 추가한다.
    $container.innerHTML = `
    
      <h1>ORION WORLD</h1>
      <div class="sns-carousel-slides">
        ${[images[images.length - 1], ...images, images[0]].map(url => `<img src="${url}" />`).join('')}
      </div>
      <button class="sns-carousel-control prev">&laquo;</button>
      <button class="sns-carousel-control next">&raquo;</button>
    `;

    $carouselSlides = document.querySelector('.sns-carousel-slides');
    


  window.onload = () => {
    // carousel의 width 결정
    // img 요소의 width는 가변적이므로 첫번째 img 요소의 width를 offsetWidth으로 취득해 설정한다.
    const { offsetWidth } = $carouselSlides.querySelector('img');
    $container.style.width = `${offsetWidth}px`;
    $container.style.opacity = 1;

    move(++currentSlide);
    
    // Autoplay
    // timerId = setInterval(() => move(++currentSlide, DURATION), 3000);
  };

  $container.onclick = ({ target }) => {
    // isMoving 상태를 확인하여 transition 중에는 이동을 허용하지 않는다.
    if (!target.classList.contains('sns-carousel-control') || isMoving) return;

    // clearInterval(timerId);

    // prev 버튼이 클릭되면 currentSlide를 -1하고 next 버튼이 클릭되면 currentSlide를 +1한다.
    const delta = target.classList.contains('prev') ? -1 : 1;
    currentSlide += 1 * delta;
    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;

    // currentSlide === 0, 즉 선두에 추가한 클론 슬라이드면 currentSlide += images.length로 image의 마지막(images.length)으로 이동
    // currentSlide === images.length + 1, 즉 마자막에 추가한 클론 슬라이드면 currentSlide -= images.length로 image의 선두(1)로 이동
    // 클론 슬라이드가 아니면 currentSlide += 0으로 이동하지 얺는다.
    const delta = currentSlide === 0 ? 1 : currentSlide === images.length + 1 ? -1 : 0;

    // 클론 슬라이드가 아니면(delta === 0) 이동하지 않는다.
    if (!delta) return;

    currentSlide += images.length * delta;
    move(currentSlide);
  };
};

carousel(document.querySelector('.sns-carousel'), [
  './img/sns/img1.png',
  './img/sns/img2.png',
  './img/sns/img3.png',
  './img/sns/img4.png',
  './img/sns/img5.png',
  './img/sns/img6.png',
  './img/sns/img7.png',
  './img/sns/img8.png',
  './img/sns/img9.png',
  './img/sns/img10.png',
  './img/sns/img11.png'

]);











});//전체
