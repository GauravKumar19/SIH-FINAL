// logout
const logout = document.getElementById('logout')
logout.addEventListener('click', out)

function out() {

auth.signOut();
  window.location.assign("cctns2.html");
console.log("user logout SUCCESSFULLY");
}
