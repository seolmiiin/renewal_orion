$(function(){//bxSlider메서드
var mySlider = $('#best_bg ul').bxSlider({
  mode: "horizontal", //수평방향으로 이동합니다.
  speed:500, //이동속도 (500,0.5초)
  pager:false, //페이징표시제어숨김
  moveSlides:1,  //이동슬라이드 수
  slideWidth:150,  //각 슬라이드 폭
  minSlides:5, //최소 노출 슬라이드 수
  maxSlides:5,  //최대 노출 슬라이드 수
  slideMargin:10, //슬라이드간의 간격
  auto:true,  //자동슬라이드여부
  autoHover:true,  //마우스 오버시 자동정지
  controls:false  //이전 다음 버튼을 숨긴다.



});//bxSlider메서드

$('p.prev_btn').click(function(e){
  e.preventDefault();
  mySlider.goToPrevSlide();
  //return false;
});

$('p.next_btn').click(function(e){
  e.preventDefault();
  mySlider.goToNextSlide();
});




});//전체fucntion




