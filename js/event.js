$(function(){


$('.tab_menu a').on('click',function(event){
    event.preventDefault();
    var tab=event.currentTarget.id;

    $('.'+tab).show();
    $('.'+tab).siblings().not('.tab_menu').hide();
    
  });

////////////////////////

var eventTitle=$('.event-menu1>p');

eventTitle.click(function(e){
  var eventList=e.currentTarget.id;
        $('.'+eventList).stop().slideToggle(500);
       

    });
//////////////////////



/////////////////////////////////////


});

