function validate(){
    var name=document.getElementById('nameId').value;
    var pass=document.getElementById('passwordId').value;

    if(name==""){
        document.getElementById("nameMsg").innerHTML="enter name";
        document.getElementById("nameMsg").style.color="red";
        return false;
    }
    if(pass==""){
        document.getElementById("passwordMsg").innerHTML="enter password";
        document.getElementById("passwordMsg").style.color="red";
        return false;
    }
    return true;
}