function validate(){
    var name=document.getElementById("nameId").value.trim();
    var password=document.getElementById("passId").value.trim();
    var email=document.getElementById("emailId").value.trim()
    var phone=document.getElementById("phoneId").value.trim()

    //for name
    if(isBlank(name)){
       document.getElementById("nameMsg").innerHTML="Please enter your name";
       document.getElementById("nameMsg").style.color="red";
        return false;
    }

    //for password
    if(isBlank(password)){
        document.getElementById("passMsg").innerHTML="Please enter your password";
        document.getElementById("passMsg").style.color="red";
        return false;
    }
    //for eamil
    if(isBlank(email)){
        document.getElementById("emailMsg").innerHTML="Please enter your email";
        document.getElementById("emailMsg").style.color="red";
        return false;
    }

    if(!isValidEmail(email)){
        document.getElementById("emailMsg").innerHTML="Please enter correct email";
        document.getElementById("emailMsg").style.color="red";
        return false;
    }

    //for phone no
    if(isBlank(phone)){
        document.getElementById("phoneMsg").innerHTML="Please enter your phone";
        document.getElementById("phoneMsg").style.color="red";
        return false;
    }

    if(!isValidPhoneNumber(phone)){
        document.getElementById("phoneMsg").innerHTML="Please enter correct phone no formate (10digit)";
        document.getElementById("phoneMsg").style.color="red";
        return false;
    }

    return true;
}

function isBlank(val){
    return(val=='')?true:false;
}

function isValidPhoneNumber(phoneNo){
    var phoneRE = /^[2-9]{2}[0-9]{8}$/;
    return (phoneNo.match(phoneRE))?true:false;
}

function isValidEmail(email){
    // /^[A-Za-z0-9_.+-]{8, 20}+@[a-zA-Z0-9]{3, 10}+.[a-zA-Z0-9-.]{2, 4}+$/
    var emailRE = /^[A-Za-z0-9.]{8, 20}+@[a-zA-Z0-9]{3, 10}+.[a-zA-Z0-9-.]{2, 4}+$/
    return (email.match(emailRE))?true:false;
}
