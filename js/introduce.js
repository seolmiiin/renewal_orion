
document.addEventListener('DOMContentLoaded',function(){
  // console.log('설민이는 인트로듀스페이지 테스트중');
  let $img=document.querySelectorAll('.graphic-item');
  let $text=document.querySelectorAll('.step');
  let currentImg=$img[0];
  

  
  for(let i=0; i<$img.length; i++){
 $img[i].dataset.index=i;
 $text[i].dataset.index=i;
  }
  
  window.addEventListener('scroll',function(){
  let step;
  let textTop;
  
    for(let i=0; i<$text.length; i++){
      step=$text[i];
      textTop=$text[i].getBoundingClientRect();
      if(textTop.top<window.innerHeight*0.8
        && textTop.top>window.innerHeight*0.1
        ){
          if(currentImg){
            currentImg.classList.remove('visible');
          }
          currentImg=$img[step.dataset.index];
          currentImg.classList.add('visible');
  
      }//if
  
    }//for
  
  });
  
  currentItem.classList.add('visible'); 
  
  
  }); //전체-end