
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
return true;
alert = ('Thanks for subscribing!')
document.form1.text1.focus();
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}