function msg(){
    var ss=document.getElementById('shoe_size').value;
    var ye=document.getElementById('year').value;
    var fmsg= ((((ss*2)+5)*50)-ye)+1766;
    alert("Result = " + fmsg);
    }