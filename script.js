function validate(){
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    

    if(username.value==""){
        alert("must have a username");
        document.form1.username.focus();
        return false;
    }
    if(email.value==""){
        alert("must have a Email id");
        document.form1.email.focus();
        return false;
    }
    if(password.value==""){
        alert("must have a password");
        document.form1.password.focus();
        return false;
    }
   
    
}