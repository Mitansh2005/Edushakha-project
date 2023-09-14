let buttonPressedTimes=0;
const loginBtn=document.querySelector('.redirect-login-button');
loginBtn.addEventListener("click",()=>{
  if(buttonPressedTimes==0){
    document.location='login.html';
    buttonPressedTimes++;
  }
  else{
    loginBtn.innerHTML=`
    <button class="logout" onclick="
    document.location='login.html'">
    Logout
    </button>
    `
  }
})