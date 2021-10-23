// login form and signup form
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});
//validation part
function check()
{
  var us =document.getElementById("userlgn");
  var ps=document.getElementById("passlgn");
  var msg1=document.getElementById("msg1");

  var exp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if(exp.test(ps.value))
  {
   
      ps.style.borderBlockColor="white";
      msg1.setAttribute("hidden","true");
  }
  else
  {
  
      ps.style.borderBlockColor="red";
      ps.value="";
      ps.focus();
      msg1.style.color="red";
      msg1.innerHTML="Passord : <u> minimum 8 characters, <br> atleast one uppercase,lowercase and digit</u>";
  }

}
function validate()
{
  var username=document.getElementById("username");
  var psw=document.getElementById("password");
  var confirmpsw=document.getElementById("confirm");  
  var btn=document.getElementById("btn");
  var msg1=document.getElementById("msg1");
  var msg2=document.getElementById("msg2");

  var exp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if(exp.test(psw.value))
  {
   
      psw.style.borderBlockColor="white";
      msg1.setAttribute("hidden","true");
  }
  else
  {
  
      psw.style.borderBlockColor="red";
      psw.value="";
      psw.focus();
      msg1.style.color="red";
      msg1.innerHTML="Passord : <u> minimum 8 characters, <br> atleast one uppercase,lowercase and digit</u>";
  }

  if (confirmpsw.value.length==psw.value.length && confirmpsw.value.match(psw.value))
  {
      
    confirmpsw.style.borderBlockColor="white";
     msg2.setAttribute("hidden","true");
  }
  else
  {
    confirmpsw.style.borderBlockColor="red";
    confirmpsw.value="";
    confirmpsw.focus();
    msg2.style.color="red";
    msg2.innerHTML="Password not matching";
  }
}
