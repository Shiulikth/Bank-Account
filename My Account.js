//handler add to submit button
document.getElementById ("login-btn").addEventListener("click",function(){
    //console.log ("button clicked");

    //get user Email
    const emailField = document.getElementById ("user-email");
    const userEmail = emailField.value;
    emailField.value = "";
    //console.log (userEmail);

    //get user password
    const passwordField = document.getElementById("user-password");
    const userPassword =  passwordField.value;
    //console.log (userPassword);
    passwordField.value= "";

    //location.href = "amountdetails.html"
    window.open("amountdetails.html", "_blank");

})