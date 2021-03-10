const img1=document.querySelector("#image1");
const img2=document.querySelector("#image2");
const img3=document.querySelector("#image3");
const img4=document.querySelector("#image4");
const img5=document.querySelector("#image5");
const changeImg=(id) =>{
    if(id=="img1"){
        img1.src="images/image1_2.jpg";
    }
else if(id=="img2"){
    img2.src="images/image2_2.jpg";
}
else if(idd=="img3"){
    img3.src="images/image3_2.jpg";
}
else if(idd=="img4"){
    img4.src="images/image4_2.jpg";
}
else if(idd=="img3"){
    img5.src="images/image5_2.jpg";
} }
img1.addEventListener("mouseover",()=>{changeIng("img1")});
img2.addEventListener("mouseover",()=>{changeIng("img2")});
img3.addEventListener("mouseover",()=>{changeIng("img3")});
img4.addEventListener("mouseover",()=>{changeIng("img4")});
img5.addEventListener("mouseover",()=>{changeIng("img5")});