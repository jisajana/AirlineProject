function validatePassword(){

}
function validateConfirmPassword(){
    let password = document.getElementById("upass").value;
    let password2 = document.getElementById("upass2").value;
    validatePasswordLength(password);
    validatePasswordLength(password2);

}
function validatePasswordLength(){

}
function validatePasswordLength(){

}
function validatePasswordLength(){

}

function validatePasswordLength(){

}



function validateMyForm(){
    //alert('Validating my login form');
    let username = document.getElementById("uname").value;
    let password = document.getElementById("upass").value;
    let password2 = document.getElementById("upass2").value;
    //alert(username + ":" + password);
    if(password != password2){
        document.getElementById("passSpan2").innerHTML="Passwords not matching";
        return false;
    } else{
        document.getElementById("passSpan").innerHTML="";
        document.getElementById("passSpan2").innerHTML="";
    }

    if (username == ""){
        //alert("username can not be blank.")
        console.log("Username can not be blank.");
        document.getElementById("userSpan").innerHTML="Username can not be blank.";
        return false;
    }

    if (username.length < 8){
        document.getElementById("userSpan").innerHTML="Username should be more than 8 letters.";
        return false;
    }

    if (password == ""){
        //alert("password can not be blank.")
        console.log("Password can not be blank.")
        document.getElementById("passSpan").innerHTML="Password can not be blank.";
        return false;
    }

    if (password.length < 8){
        document.getElementById("passSpan").innerHTML="Password should be more than 8 letters.";
        return false;
    }
    return false; //true is the proof that all is ok


}



function userErrorMessage() {
    let username = document.getElementById('uname').value;
    console.log(username);

    if(username.length>0) {
        document.getElementById("userSpan").innerHTML='';
    }
}
function passwordErrorMessage() {
    let password = document.getElementById('upass').value;
    console.log(password);

    if(password.length>0) {
        document.getElementById("passSpan").innerHTML='';
    }
}