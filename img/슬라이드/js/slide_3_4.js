document.addEventListener('DOMContentLoaded', function(){
  //1.변수지정
  var slidesWrap=document.querySelector('.container'),
  slides = document.querySelector('.slides'), 
  slide = document.querySelectorAll('li.slide'),
  slideCount = slide.length,
  currentIndex=0,
  prev=document.querySelector('#prev'),
  next=document.querySelector('#next'),
  $pager = document.querySelector('.pager'),
  $pagerBtn = document.querySelectorAll('.pager span'),
  timer = undefined; //이름은 있는데 아직 값이 없다.

  
  for(let i=0; i<=$pagerBtn.length-1; i++){
    //console.log(i);//0,1,2,3

    $pagerBtn[i].addEventListener('click',function(e){
    this.classList.toggle('active');
    //var pagerNum= e.target.setAttribute('data-idx');
    // autoMove(pagerNum);
    //  console.log();
    });
  }

  //2.슬라이드이동함수
  function moveSlide(idx){
    slides.classList.add('animated');
    slides.style.left=idx * -100 +'%';
    currentIndex=idx;
    for(var j=0; j<$pagerBtn.length; j++){
      $pagerBtn[j].classList.remove('active'); 
      }
      $pagerBtn[idx].classList.add('active'); 

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


function startAutoSlide(){
  // var timer=setInterval(function(){
     timer=setInterval(function(){
    var nextIndex = (currentIndex+1)%slideCount;
    moveSlide(nextIndex);
  },1500);
}

startAutoSlide();



function stopAutoSlide(){
  clearInterval(timer);
}

slidesWrap.addEventListener('mouseenter',function(){
  stopAutoSlide()
});
slidesWrap.addEventListener('mouseleave',function(){
  startAutoSlide(); 
  });


//pager로 슬라이드 이동하기
//pager span이 배열로 들어오고 있으닌까. for반복문
//data-idx활용

// for(var i=0; i<$pagerBtn.length; i++){
//  //console.log( $pagerBtn[i]);
//  $pagerBtn[i].addEventListener('click',function(e){
//    console.log(e.target);
//    //값을 가져와야하닌까.
//    var pagerNum= e.target.getAttribute('data-idx');
//     moveSlide(pagerNum);
//  });
// }

/*
getAttribute 속성의 값을 가져오는것
setAttribute 속성의 값을 바꾸는 것
hasAttribute 값이 있는지 없는지 확인
*/

/*
innerText 태그안에 내용 반환
내용확인 :  태그.innerText
내용바꾸기 : 태그.innerText = "b";
innerHTML 의 태그를 반환
태그확인 : 태그.innerHTML 
태그바꾸기 : 태그.innerHTML = "<h2>"__태그교체
*/

//2. span안에 글자활용
for(var i=0; i<$pagerBtn.length; i++){
  //console.log( $pagerBtn[i]);
  $pagerBtn[i].addEventListener('click',function(e){
    console.log(e.target.innerText);
        var pagerNum= e.target.innerText -1;
        //숫자가 1부터 시작하는까 -1해줘야한다.
     moveSlide(pagerNum);

    // //모든 $pagerBtn에 active제거 하고 클릭된 그 요소에만 active추가
    // for(var j=0; j<$pagerBtn.length; j++){
    //   $pagerBtn[j].classList.remove('active'); 
    //   //j가 0,1,2,3 이닌까 모든요소 삭제
    //   //근데 선택된놈은 active추가해줘야한다.
    //   //for밖으로 나가서
    // }
    //   e.target.classList.add('active'); 

  });//click
 }//큰 for
/*
근데 active되는 코드가 클릭할때 생겨서 알겠는데 
클릭하고 나서 검은점이 계속 클릭한 자리에 그대로 있고
슬라이드는 계속움직이고있다.
우리가 어떤 슬라이드를 보고 있는지 확인하려면
이 active되는 코드가 moveSLide함수안으로 가야한다.

*/









});//전체
