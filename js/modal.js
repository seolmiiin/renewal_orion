$(function(){
  var $modal= $('#modal-wrap');


  $('#index-modal').click(function(){
           
             $modal.toggleClass('open');
              console.log($modal);
              if($modal.hasClass('open')){
                $modal.stop().animate({right :'100px'},800);
              }else{
               $modal.stop().animate({right :'200%'},800);
              }
          });
  });