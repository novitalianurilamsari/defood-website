

/*===== LOGIN SHOW and HIDDEN =====*/

const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})



function validasignin(form){
    var username = document.forms["login-in"]["username"].value;
    var password = document.forms["login-in"]["password"].value;
    if( username == "novi" && password == "1234"){
      return true;
    }
    else if(username ==""|| password ==""){
      alert("Masukan username dan password Anda");
      return false;
    }
    else{
      alert("Username atau password yang Anda masukan SALAH");
      return false;
    }
  }

  
  function validasignup(form){
    var username = document.forms["login-up"]["username"].value;
    var password = document.forms["login-up"]["email"].value;
    var password = document.forms["login-up"]["password"].value;
    if( username == "novi" && email == "novi@gmail.com" && password == "1234"){
      return true;
    }
    else if(username ==""|| email ==""|| password ==""){
      alert("Masukan username, email dan password Anda");
      return false;
    }
    else{
      alert("Username, email, atau password yang Anda masukan SALAH");
      return false;
    }
  }
