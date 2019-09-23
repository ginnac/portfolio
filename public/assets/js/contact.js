var emailToCheck;

$("#submit").on("click", function(event) {
    event.preventDefault();
    if($("#contact-box").val()===""||$("#contact-box1").val()===""||$("#contact-box-2").val()===""){
        alert("Please complete the form before submiting your request");
    }

    else{

        emailToCheck=$("#contact-box1").val().trim();
        checkEmail(emailToCheck);
   
    //save in database the contact information
        $.ajax({
            method: "POST",
            url: "/api/submit",
            data: {
            // name
                name: $("#contact-box").val().trim(),
            // email
                email: $("#contact-box1").val().trim(),
            //message
                message: $("#contact-box-2").val().trim()
            }
        }).then(function(data) {
            console.log(data);
            // Also, remove the values entered from user
            $("#contact-box").val("");
            $("#contact-box1").val("");
            $("#contact-box-2").val("");

            window.location.href = "/thanks";

        });
    }
});



function checkEmail(emailToCheck) {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(emailToCheck)) {
    alert('Please provide a valid email address');
    emailToCheck.focus;
    return false;
 }

}