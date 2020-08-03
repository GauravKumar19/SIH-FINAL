// logout
const out = document.getElementById('logout')
out.addEventListener('click', logut)

function logut() {

auth.signOut();
  window.location.assign("login2.html")
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
