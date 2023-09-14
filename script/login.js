const loginBtn=document.getElementById('login');
const id=document.querySelector('.Student-Id');
loginBtn.addEventListener("click",()=>{
 if(id.innerHTML===null){
  id.innerHTML=`
  <input type="text" class="Student-Id" placeholder="Please fill this" name="uname" style="
  .input placeholder{
    color:"red";
  }
  ">
  `
 }

})

// console.log(login+" "+'hello');
