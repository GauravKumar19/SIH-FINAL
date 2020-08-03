// logout
const out = document.getElementById('out')
out.addEventListener('click', logout)

function logout() {

auth.signOut();
  window.location.assign("login.html")
console.log("user logout SUCCESSFULLY");
}
auth.onAuthStateChanged((user)=>{
  if(user)
  {

  }
  else
  {



  }
})
