var bigPic=document.querySelector("#kko-snack");
var smallPics=document.querySelector(".small");

for(var i=0; i<smallPics.length; i++){
    smallPics[i].addEventListener("click",function(){
        var chagePic=this.src;
        bigPic.setAtrribute("src",chagePic);
    });
}