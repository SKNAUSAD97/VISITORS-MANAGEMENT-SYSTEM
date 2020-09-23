import React from "react";

const LoginJs = () =>{
    
    $("#login-button").click(function(event){
        event.preventDefault();
    
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    });
}
export default LoginJs;

