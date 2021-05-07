const firstName = $("#first-name");
const lastName = $("#last-name");
const email = $("#email");
const password = $("password");
const resultEmail = $("#resultEmail");
const resultFn = $("#resultFn");
const resultLn = $("#resultLn");
const resultPass = $("#resultPass");


function validate() {
  const regex = /\S+@\S+\.\S+/;
  let apply = false;

  if (!firstName.value){
    resultFn.show();
    resultFn.text("First Name cannot be empty");
    resultFn.css("color", "hsl(0, 100%, 74%)");
    $('#first-name').css('border', 'hsl(0, 100%, 74%) solid 2px');
    $('#first-name').addClass('error-img');
  }

  if (!lastName.value){
    resultLn.show();
    resultLn.text("Last Name cannot be empty");
    resultLn.css("color", "hsl(0, 100%, 74%)");
    $('#last-name').css('border', 'hsl(0, 100%, 74%) solid 2px');
    $('#last-name').addClass('error-img');
  }

  if(!regex.test(String(email.value))){
    resultEmail.show();
    resultEmail.text("Looks like this is not an email");
    resultEmail.css("color", "hsl(0, 100%, 74%)");
    $('#email').css('border', 'hsl(0, 100%, 74%) solid 2px');
    $('#email').addClass('error-img');
  }

  if (!password.value){
    resultPass.show();
    resultPass.text("Password cannot be empty");
    resultPass.css("color", "hsl(0, 100%, 74%)");
    $('#password').css('border', 'hsl(0, 100%, 74%) solid 2px');
    $('#password').addClass('error-img');
  }

  if (firstName.value && lastName.value && regex.test(String(email.value)) && password.value){
    apply = true;
  }

    
  return apply;
};

$(".submit").on("click", validate);