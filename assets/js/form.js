function verificaEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function controlloForm() {
    var nome = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var msg = document.forms["form"]["msg"].value;
  
    if ( email == "" || msg == "") {
      alert("Email and Message are required!");
      return false;
    }
    else if (verificaEmail(email) !== true) {
      alert("The email address does not seem correct!");
      return false;  
    }else{
      return true;
    }
  }