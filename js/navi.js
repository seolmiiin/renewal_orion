////헤더
let lastScrollY=0;

function printEvent(e){
  const standard = 30;
  const navi= document.querySelector('header.section');
  // const toTop = document.querySelector('#top');


  // if(window.scrollY > standard) {
  //   toTop.classList.add('show');
  // }else{
  //   toTop.classList.remove('show');
  // }
  
  if(window.scrollY > lastScrollY) { 
  navi.classList.add('lift-up');
  }else{
    navi.classList.remove('lift-up');
  }
  
  lastScrollY=window.scrollY;
  // console.log(lastScrollY);
}


 window.addEventListener('scroll', printEvent);  


 