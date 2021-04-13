//제이쿼리문법
//퀵 사이드 버튼,롤링,신상품
$(function(){






  $('.top-btn').on('click',function(){
    //  $(window).scrollTop(0); 
    $('html,body').animate({scrollTop:0},700);
    });
   
    $(window).on('scroll', function(){
      if($(window).scrollTop() >= $('section.intro').position().top/2){
        $('section.quick-btn').show(300);
      }else{
        $('section.quick-btn').hide(500);
      }
    });
    
    //신상품

    var $nslides = $('#new img'),
    $nslideCount= $nslides.length, //3
    $ncurrentIndex=0;

    $nslides.eq($ncurrentIndex).fadeIn();
    
    var $ntimer = setInterval($nshowNextSlide,2000);
    
  
    function $nshowNextSlide(){
     
      var $nextIndex = ($ncurrentIndex + 1) % $nslideCount;
    
      $nslides.eq($ncurrentIndex).fadeOut();
      $nslides.eq($nextIndex).fadeIn();
      $ncurrentIndex=$nextIndex;
    }
    //마우스올리면 멈추게
    // function $timeron(){
    //   setInterval($nshowNextSlide, 2000);
    // }
    // function $timeroff(){
    // clearInterval($ntimer);
    // };
    
    // $nslides.mouseover(function(){
    //  $timeroff();
    // })
    // .mouseout(function(){
    //  $timeron();
    // });
    
    
    
    //섹션스크롤
    // function scrollHandler(){
    // var $windowTop=$(window).scrollTop();
    
    // $('section').not('.quick-btn').each(function(){
    //   if($windowTop >= $(this).position().top ){
    //     $(this).animate({opacity : 1},500);
    //     $(this).find('.section--scroll').animate({top:'10px'},800);
    //     $(this).find('.scroll-left').animate({left:'10px'},800);
    //   }
    // });
    //}//전체함수
    
    
        function scrollHandler2(){
          var windowBottom = $(window).scrollTop()+$(window).height();
    
          $('section').not('.quick-btn').each(function(){
            // console.log('섹션'+ $(this)); 
             var $section = $(this);
            var sectionHalf = $section.position().top + $section.outerHeight() /2 ;
                if(sectionHalf <windowBottom){
                     $section.animate({opacity : 1},700);
                    $section.find('.section--scroll').delay(300).animate({ top:'10px'},800);
                    $section.find('.scroll-left').animate({left : '10px'},1000);
                    $section.find('.o-box').addClass('active')
     
                  }
          });
        }//전체함수

setInterval(function(){
  $('section.marketo .o-box p').mouseover(function(){
    
    $('section.marketo .o-box p').children().addClass('bg-active');
 
  });
   
},3500);
  
  // $(window).on('scroll',scrollHandler);
  
  $(window).on('scroll',scrollHandler2);
  scrollHandler2();
  




//롤링



  var rolls=$('#rolls');
  var roll=$('#rolls li');
  var rollCount=roll.length;
  var rollCurrent=0;
  var upBtn = $('#btn-up');
  var downBtn = $('#btn-down');
  var timer=undefined;



//이동함수만들기
function rolling(idx){
//roll.eq(idx).position().top;
rolls.stop().animate({'top':-roll.eq(idx).position().top+'px'},500);
rollCurrent=idx;
}
rolling(0);

//버튼
upBtn.click(function(){
if(rollCurrent>0){
rolling(rollCurrent-1);
}else{
rolling(rollCount-1);
}
});

downBtn.click(function(){
if(rollCurrent<rollCount){
  rolling(rollCurrent+1);
}else{
  rolling(0);
}
});

//자동함수만들기
function autoRoll(){
timer=setInterval(function(){
  var nextRoll=(rollCurrent+1)%rollCount;
  rolling(nextRoll);
},2500);

}//autoRoll



autoRoll();

function stopRoll(){
clearInterval(timer);
}


$('.rolling').mouseenter(function(){
stopRoll();
});
$('.rolling').mouseleave(function(){
autoRoll();
});


////////팝업






});//전체












  
  
  

