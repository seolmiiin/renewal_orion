$(function(){

  /*변수및 요소 선언*/
 var scrollBody = $('.fix_motion'); //부모 스크롤 엘리먼트
 var titText = scrollBody.find('.intro_txt'); //타이틀 텍스트
 var maskLeft = scrollBody.find('.left_mask'); //마스크 레프트
 var maskRight = scrollBody.find('.right_mask'); //마스크 라이트
 var bgImage = scrollBody.find('.bg_img'); //배경 이미지
 var endingContent = scrollBody.find('.ending_txt'); //엔딩이미지

 /*리사이즈, 스크롤할때 변해야 할 값들*/
 var scrollHeight; // 스크롤 높이
 var sectionOffsetTop; //섹션의 오프셋 탑 변수
 var sectionScrolTop; //섹션의 스크롤 탑 변수
 var scrollRealHeight; //실제로 스크롤해야될 높이를 담을 변수를 선업합니다
 var winScrollTop; // 스크롤바의 높이를 담을 변수를 선업합니다
 var scrollPerecnt // 스크롤탑 / 스크롤 길이로 구한 비율 값
 var percent; // 스크롤 백분율값을 담을 변수를 선업합니다


 function changeOverlap(){ //스크롤할때 계속 호출될 함수 선언

     setProperty(); // 스크롤할때 변해야할 값들의 변수를 선언
     motionRender(); //모션 실행 함수

 };

 function setProperty(){ // 스크롤할때 변할 값들을 셋팅해주는 함수

     scrollHeight = scrollBody.height(); // 스크롤 높이
     sectionOffsetTop = scrollBody.offset().top; //섹션의 오프셋 탑 구함

     scrollRealHeight = (scrollHeight - $(window).height()); //실제로 스크롤해야될 높이값을 구합니다
     winScrollTop = $(window).scrollTop(); //스크롤바의 현재 위치를 구합니다
     sectionScrolTop = winScrollTop - sectionOffsetTop // 섹션의 탑 값을 구함

     scrollPerecnt =  sectionScrolTop / scrollRealHeight; // 스크롤탑 / 스크롤 길이 로 비율을 구합니다
     percent = scrollPerecnt * 100 ; //백분율을 구합니다

 };

 function motionRender(){ //모션 실행 함수

     var maskStartValue = 50; //마스크 처리값
     var maskEndValue = 0; // 최종 마스크 크기
     var zoomValue = 1.5; //줌될 크기
     var zoomOutValue = 1; //줌 아웃될 크기
     var maskVal = Math.max(maskEndValue, maskStartValue - (scrollPerecnt * maskStartValue)); //마스크 처리값
     var scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPerecnt * zoomValue)); // 줌 처리값

     /* 마스크 처리 */
     maskLeft
     .css({
         width: maskVal + '%'
     });

     maskRight
     .css({
         width: maskVal + '%'
     });

     /* 이미지 스캐일 처리 */
     bgImage
     .css({
         'transform': 'scale('+ scaleVal +')'
     });

     /* 인트로 텍스트 퇴장 처리 */
     if(percent > 0.3){
         titText.addClass('active');
     }else{
         titText.removeClass('active');
     }
      

     /* 엔딩 텍스트 등장 처리 */
     if(percent >= 70){
         endingContent.addClass('active');
     }else {
         endingContent.removeClass('active');
     }

 };

 function init(){ 
     changeOverlap();
     bindEvent();
 };

 function bindEvent(){
     $(window).scroll(function(e){ 
         changeOverlap();
     });

     $(window).resize(function(){
         changeOverlap();
     });
 };

 if(Modernizr.csspositionsticky){
     init(); //start
 };

 function scrollHandler(){


var windowBottom=$(window).scrollTop()+$(window).height();

$('section').each(function(){
   var $section=$(this); 
   var sectionHalf=$section.position().top + $section.outerHeight()/2;
  
   if(sectionHalf < windowBottom){
     $section.addClass('active');
     
   }
});//each-end



}//scrollHandler-end


//orionMAn
const oriMan = document.querySelector('.orionman');
const value = document.querySelector('.value');
let yPos=0;
let rafId;//6.변수선언  requestAnimationFrame 을 rafId로 그리고1.로가서 값지정


function render(){
value.innerHTML=yPos;
oriMan.style.transform = `translateY(${-yPos}px)` ;
yPos+=10; //4.
// yPos++; 1씩 증가하면 티가 안나닌까 10씩 증가하도록 만들어보자
//7-1.
rafId= requestAnimationFrame(render);
// 1.안에 함수 render를 넣고호

//8.
if(yPos>500){
 cancelAnimationFrame(rafId);
}
}
render();
//2.render호출하면 아주 빠른속도로 1T씩 증가


// window.addEventListener('click',()=>{
// cancelAnimationFrame(rafId); //7-2
// });















$(window).on('scroll',scrollHandler);
scrollHandler(); 









});//전체end