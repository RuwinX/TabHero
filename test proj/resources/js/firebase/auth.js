document.addEventListener("DOMContentLoaded", authMain);

function authMain() {
  console.log("firebase auth loaded");

  // Event listener for Signup Button
  window.addEventListener('load', function listenForSignUpButton(event) {
    var createButton = document.getElementById('formButtonForSignUp');
    createButton.addEventListener('click', function () { handleSignUp(); })
  });



  function handleSignUp() {

    var user_email = document.getElementById('email').value;
    var user_pass = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(user_email, user_pass).then(function (user) {
      // User Logged In.
      alert("signed up successfully!");
      console.log(user);

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);

    })
  }

  //function that will be used to actually push data from the chrome tab API into cloud DB
  function pushData(){
    
  }

}


