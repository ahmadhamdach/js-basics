function msg(){
    var name=document.getElementById('name').Value;
    var surname=document.getElementById('surname').value;
    var city=document.getElementById('city').value;
    var fmsg="Hello"+name+" "+surname+"\nForm"+city;
    alert(fmsg);
}