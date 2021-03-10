var s=document.querySelector("#show");
var h=document.querySelector("#hide");
var t=document.querySelector("#texte");
const showhide=(i)=>{
    if(i=="sh"){
        t.style.visibility="visible";
    }
    else if(i=="hi"){
        t.style.visibility="hidden";
    }
}
s.addEventListener("click",()=>{showhide("sh")});
s.addEventListener("click",()=>{showhide("hi")});