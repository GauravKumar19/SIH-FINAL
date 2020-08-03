
// <!--ADMIN LOGIN-->


const login = document.getElementById('login')
login.addEventListener('click', log)

auth.onAuthStateChanged(function(user){
//user is sign in
  if(user) {
   console.log("USER ENTER");

   window.location.assign("admin.html");



   }


  else{
// no user is sign in


  }
});



function log()
{
// login
//const loginForm = document.querySelector('#loginForm');
  // get user info
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;


  // log the user in
  auth.signInWithEmailAndPassword(email, password).catch(function(error){


var errorCode= error.code;
var errorMessage = error.message;

window.alert("ERROR:" + errorMessage);

});
// } {
//     // close the signup modal & reset form
//     console.log(cred)
//
//     window.location.assign('Fir.html');
//
//   }).catch(err => {
//   console.log("Can't sign in"+err)
//   });
//
}
