$(function(){
  
  //스크롤 효과

// $('.sec04 article>div').find('img').stop().css('left','-50%');
$(window).on('scroll',function(){

 if($(this).scrollTop()>=$('.sec04').position().top){
    $('.sec04 article>div').addClass('active');
    $('.sec04 article>div').find('img').addClass('active');

    }
});

  
// var sec3 =setTimeout(function(){

//   //  $('.sec03 .wrap p').addClass('effect');
//     $('.sec03 article').animate({left:'0'},1000);
//     },500);

  
  
  
  
  
  
  
  
  
  
  //bxSlider메서드
  var mySlider = $('#best_bg ul').bxSlider({
    mode: "horizontal", //수평방향으로 이동합니다.
    speed:500, //이동속도 (500,0.5초)
    pager:false, //페이징표시제어숨김
    moveSlides:1,  //이동슬라이드 수
    slideWidth:500,  //각 슬라이드 폭
    minSlides:3, //최소 노출 슬라이드 수
    maxSlides:3,  //최대 노출 슬라이드 수
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
  
  //top-menu
var topMenus= $('.visual-bg .top-wrap .top-menu li');
 topMenus.eq(0).on('click',function(){
    var section5=$('.sec05').position().top;
     $('html,body').animate({scrollTop : section5},1000);
     return false;
  });
  topMenus.eq(1).on('click',function(){
    var section7=$('.sec07').position().top;
     $('html,body').animate({scrollTop : section7},1000);
     return false;
  });
  topMenus.eq(2).on('click',function(){
    var section8=$('.sec08').position().top;
     $('html,body').animate({scrollTop : section8},1000);
     return false;
  });










  //qna
  var qnas=$('.sec07 article .qna');
  $('.sec07 article .res').not('.qna1').hide();
qnas.on('click',function(e){
var qna = e.currentTarget.id;
$('.'+ qna).stop().slideToggle('slow');
$('.'+ qna).siblings('.res').stop().slideUp('slow');
});

  //store
  var lists=$('.sec08 article .store-list ul li');
  lists.on('click',function(e){
    e.preventDefault();
    var list=e.currentTarget.id;
   $('.'+list).stop().fadeIn('slow');
   $('.'+list).siblings().stop().fadeOut();

  });//list




  //top-btn
  $('#top-btn').fadeOut();
  //top으로 이동
  $('#top-btn').click(function(){
    $('body,html').animate({scrollTop : 0},1000);
  });
  //보였다 안보였다.
  $(window).on('scroll',function(){
    
    if($(this).scrollTop() >= $('.sec02').position().top/2){
      $('#top-btn').fadeIn('slow');
    }else{
      $('#top-btn').hide();
    }
  });
  
  
  });//전체fucntion

 