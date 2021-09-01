document.getElementById('login-submit').addEventListener('click', function()
{
    // get email field
    const emailField= document.getElementById('user-email');
    const userEmail=emailField.value;
    
    // get user password
    const passwordField=document.getElementById('user-password');
    const userPassword=passwordField.value;

    if(userEmail=='sarwar@gmail.com' && userPassword=='sarwar') 
    {
        window.location.href='banking.html';
    }
  
    emailField.value='';
    emailField.value='';

})