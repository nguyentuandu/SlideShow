
var kichthuoc=document.getElementsByClassName("slides")[0].clientWidth;
var chuyenslide=document.getElementsByClassName("slide")[0];
var chuyen=0;
var img=chuyenslide.getElementsByTagName("img");
var max=kichthuoc*img.length;
max-=kichthuoc;
function Next()
{
    if(chuyen<max) chuyen+=kichthuoc;
    else  chuyen=0;
    chuyenslide.style.marginLeft = '-'+ chuyen+'px';
}
function Prev(){ 
    if(chuyen==0)  chuyen=max;
    else   chuyen-=kichthuoc;
    chuyenslide.style.marginLeft='-'+chuyen+'px';
}
setInterval(function(){
    Next();
},5000);