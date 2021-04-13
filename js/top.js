$(function(){
var $scrollTop =$(window).scrollTop();
if($scrollTop > $('#main-menu').position().top)

});
 
 
 // $(function(){
    // var defaultTop = parseInt($('#quick_menu').css('top'));
    //   //기본문서상단에서 퀵메뉴가 이동한 상단 거리값을 구함
    // //   var offsetTop=$('#quick_menu').offset().top;

    // //이벤트 헨들러의 실행문 실행한다
    // $(window).on('scroll',function(){
    //    var scv=$(window).scrollTop();
    //    $('#quick_menu').stop().animate({top : scv + defaultTop + 'px'},500);
    
    //   });
    // });


    
    // $(function(){
    //   var defaultTop = parseInt($('#quick_menu').css('top'));
    //   var offsetTop=$('#quick_menu').offset().top;
    //     $(window).on('scroll',function(event){
    //      var $scrollTop=$(window).scrollTop();
    //     // console.log($scrollTop);
    //     console.log(event.scrollY);
    //     $('#quick_menu').stop().animate({top : $scrollTop + offsetTop + 'px'},500);
          
    //     });
  
  
    //   });