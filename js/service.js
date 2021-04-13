$(function(){
$content=$('#content');
  $('.tab_content button').on('click',selectMenu);

  function selectMenu(event){
         var targetId= event.currentTarget.id;
      console.log('.'+targetId);
     $content.children().hide();
      $content.find('.'+targetId).show();
  }

//qna
$('.faq .commonques').on('click',qnaClick);
function qnaClick(event){
  var qnaId=event.currentTarget.id;
   console.log(qnaId);
   $('#'+qnaId).next().slideToggle('slow');
}



});//전체