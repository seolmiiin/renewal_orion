//인덱스 sns 자바스크립트문법, 사이드메뉴
document.addEventListener('DOMContentLoaded',function(){



  var snsWrap = document.querySelector('.sns-slides'),
  sns = document.querySelectorAll('.sns-slides li'),
  snsWidth=300,
  snsMargin=5,
  snsCount=sns.length,
  snsCurrentIdx=0,
  snsTimer=undefined,
  snsPrevBtn=document.querySelector('.sns-prev'),
  snsNextBtn=document.querySelector('.sns-next');

var swi=snsWrap.style.width= (snsWidth + snsMargin) * snsCount - snsMargin + 'px';
console.log('sns너비는'+swi);


function moveSns(num){
snsWrap.style.left = -num *(snsWidth + snsMargin) + 'px';
snsCurrentIdx=num;
for(let i=0; i<snsCount-1; i++){
  sns[i].classList.remove('sns-opacity');
}
sns[num+2].classList.add('sns-opacity');
}//moveSns


//버튼
snsNextBtn.addEventListener('click',function(){

if(snsCurrentIdx < snsCount-5){
  moveSns(snsCurrentIdx + 1);

}else{
  moveSns(0);
}

});

snsPrevBtn.addEventListener('click',function(e){
e.preventDefault();
if(snsCurrentIdx > 0){
  moveSns(snsCurrentIdx-1);
}else{
  moveSns(snsCount-5);
}

});


//자동으로 움직에게

function autoMoveSns(){
  snsTimer = setInterval(function(){
   var nextSns= (snsCurrentIdx+1) % snsCount;
  if(nextSns<7){
    moveSns(nextSns);
  }else{
    moveSns(0);
  }
  
  },2000);
}
autoMoveSns();


snsWrap.addEventListener('mouseenter',function(){
  clearInterval(snsTimer)
});


snsWrap.addEventListener('mouseleave',function(){
  autoMoveSns();
});




//////////////////////////////////////뉴프로덕트
///////////


//사이드메뉴

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      var menuAll= document.querySelector('#all-menu-wrap');
      this.classList.toggle("is-active");
     menuAll.classList.toggle('open');
      if(menuAll.classList.contains('open')){
        menuAll.style.display='block';
      }else{
        menuAll.style.display='none';
      }
    }, false);
  });
}



const chocoDisplayBtn = document.querySelector('#choco--plus--btn');
chocoDisplayBtn.addEventlistener('click',()=>{
  document.querySelector('#none--choco').style.display='block';
});












});//전체
 